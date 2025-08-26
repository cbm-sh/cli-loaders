"use client";

import { useCopy } from "@/hooks/use-copy";
import type { CopyButtonProps } from "@/types";
import { CheckIcon } from "@radix-ui/react-icons";
import { memo } from "react";
import { TbKeyframe } from "react-icons/tb";
import { Button } from "./ui/Button";

export const CopyKeyframes = memo(
  ({ variant, code, copyText }: CopyButtonProps) => {
    const { hasCheckIcon, handleMouseDown } = useCopy(code, copyText);

    return (
      <Button
        onMouseDown={handleMouseDown}
        variant={variant}
        icon={
          hasCheckIcon ? (
            <CheckIcon className="size-4 text-neutral-50" />
          ) : (
            <TbKeyframe className="size-4 text-neutral-50" />
          )
        }
        aria-label={hasCheckIcon ? "Copied keyframes!" : "Copy keyframes"}
      />
    );
  },
);

CopyKeyframes.displayName = "CopyKeyframes";
