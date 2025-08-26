"use client";

import type { RendererProps } from "@/types";
import { memo, useEffect, useMemo, useState } from "react";

export const Renderer = memo(
  ({ speed, keyframes, className, ...props }: RendererProps) => {
    const [currentFrame, setCurrentFrame] = useState(keyframes[0]);

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setCurrentFrame(keyframes[index]);
        index = (index + 1) % keyframes.length;
      }, speed);

      return () => clearInterval(interval);
    }, [keyframes, speed]);

    const renderedFrame = useMemo(() => currentFrame, [currentFrame]);

    return (
      <div
        className={
          className ??
          `relative flex flex-col items-center justify-center overflow-hidden font-mono text-4xl`
        }
        {...props}
      >
        {renderedFrame}
      </div>
    );
  },
);

Renderer.displayName = "Renderer";
