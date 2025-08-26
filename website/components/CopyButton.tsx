"use client";

import { useToast } from "@/hooks/use-toast";
import type { CopyButtonProps } from "@/types";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "./ui/Button";

export const CopyButton = ({
  variant,
  className,
  code,
  copyText,
}: CopyButtonProps) => {
  const { addToast } = useToast();
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const handleMouseDown = () => {
    navigator.clipboard.writeText(code.toString());
    setHasCheckIcon(true);
    addToast(copyText);
    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <Button
      onMouseDown={handleMouseDown}
      className={className}
      variant={variant}
      icon={
        hasCheckIcon ? (
          <CheckIcon className="size-4 text-neutral-50" />
        ) : (
          <CopyIcon className="size-4 text-neutral-50" />
        )
      }
      aria-label={hasCheckIcon ? "Copied!" : "Copy"}
    />
  );
};

CopyButton.displayName = "CopyButton";
