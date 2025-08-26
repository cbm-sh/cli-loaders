"use client";

import { useCopy } from "@/hooks/use-copy";
import type { CopyButtonProps } from "@/types";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { memo } from "react";
import { Button } from "./ui/Button";

export const CopyCode = memo(
  ({ variant, className, code, copyText }: CopyButtonProps) => {
    const { hasCheckIcon, handleMouseDown } = useCopy(code, copyText);

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
  },
);

CopyCode.displayName = "CopyCode";
