import type { HeroProps } from "@/types";
import { memo } from "react";

export const Hero = memo(({ title, description }: HeroProps) => (
  <div className="px-6 py-12">
    <h1 className="text-center text-4xl font-semibold text-balance text-neutral-50 md:text-5xl">
      {title}
    </h1>
    <p className="pt-3 text-center text-neutral-100">{description}</p>
  </div>
));

Hero.displayName = "Hero";
