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

/**
 * Downscale to ≤1600px on the long edge and re-encode (WebP, JPEG fallback).
 * `square` centre-crops to a square of at most that size (for portraits).
 */
export const resizeImage = async (
  file: File,
  { square }: { square?: number } = {},
): Promise<ResizedImage> => {
  const bitmap = await createImageBitmap(file);
  const side = Math.min(bitmap.width, bitmap.height);
  const src = square
    ? {
        x: (bitmap.width - side) / 2,
        y: (bitmap.height - side) / 2,
        w: side,
        h: side,
      }
    : { x: 0, y: 0, w: bitmap.width, h: bitmap.height };
  const edge = square ?? MAX_EDGE;
  const scale = Math.min(1, edge / Math.max(src.w, src.h));
  const width = Math.round(src.w * scale);
  const height = Math.round(src.h * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not available");
  ctx.drawImage(bitmap, src.x, src.y, src.w, src.h, 0, 0, width, height);
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
