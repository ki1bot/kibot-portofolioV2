import { HugeiconsIcon } from "@hugeicons/react";

export function HugeIcon({ icon, size = 20, strokeWidth = 1.8 }) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      color="currentColor"
      strokeWidth={strokeWidth}
    />
  );
}
