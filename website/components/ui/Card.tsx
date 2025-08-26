import type { CardProps } from "@/types";
import Link from "next/link";
import { memo } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Button } from "./Button";

export const Card = memo(({ children, slug, name, ...props }: CardProps) => (
  <div
    className="relative flex h-64 w-full items-center justify-center border border-neutral-800 md:h-[223.33px]"
    {...props}
  >
    <div className="absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] bg-[size:8px_10px]" />
    <div className="absolute top-2 left-3 text-sm text-neutral-50">{name}</div>
    <Link href={slug}>
      <Button
        variant="secondary"
        icon={<HiArrowRight size={16} />}
        aria-label="Go to Code"
      />
    </Link>
    {children}
  </div>
));

Card.displayName = "Card";
