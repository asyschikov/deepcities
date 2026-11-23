import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { avatarUrl, cn, getInitials } from "~/lib/utils";

/** A person's portrait, or their initials when they haven't added one. */
export const UserAvatar = ({
  name,
  avatarId,
  className,
}: {
  name: string;
  avatarId?: string | null;
  className?: string;
}) => (
  <Avatar className={cn("size-8", className)}>
    {avatarId && (
      <AvatarImage src={avatarUrl(avatarId)} alt="" className="object-cover" />
    )}
    <AvatarFallback className="bg-primary text-[0.7em] font-semibold text-primary-foreground">
      {getInitials(name)}
    </AvatarFallback>
  </Avatar>
);
