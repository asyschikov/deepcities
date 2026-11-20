const MAX_EDGE = 1600;

export interface ResizedImage {
  base64: string;
  contentType: "image/webp" | "image/jpeg";
  width: number;
  height: number;
  previewUrl: string;
}

const blobToBase64 = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });

/** Downscale to ≤1600px on the long edge and re-encode (WebP, JPEG fallback). */
export const resizeImage = async (file: File): Promise<ResizedImage> => {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not available");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const encode = (type: string) =>
    new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, 0.82));
  const webp = await encode("image/webp");
  const blob = webp?.type === "image/webp" ? webp : await encode("image/jpeg");
  if (!blob) throw new Error("Could not encode image");
  return {
    base64: await blobToBase64(blob),
    contentType: blob.type === "image/webp" ? "image/webp" : "image/jpeg",
    width,
    height,
    previewUrl: URL.createObjectURL(blob),
  };
};
