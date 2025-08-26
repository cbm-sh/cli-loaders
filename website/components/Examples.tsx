import type { LoaderProps } from "@/types";
import { memo, useMemo } from "react";
import { CodeBlock } from "./CodeBlock";

export const ZeroDependencyExample = memo(
  ({ speed, keyframes }: Partial<LoaderProps>) => {
    const title = "Zero Dependency Example";
    const code = useMemo(
      () => `const initCliLoader = () => {
    // Set keyframes
    const keyframes = [${keyframes?.map((keyframe) => `"${keyframe}"`).join(", ")}];
    // Set speed in milliseconds
    const speed = ${speed};
    // Start at the first keyframe
    let index = 0;
    // Set interval to change keyframes
    setInterval(() => {
        process.stdout.write("\\r" + keyframes[index]);
        index = (index + 1) % keyframes.length;
    }, speed);
};
// Start the loader
initCliLoader();`,
      [speed, keyframes],
    );

    return <CodeBlock lang="ts" title={title} code={code} />;
  },
);

ZeroDependencyExample.displayName = "ZeroDependencyExample";

export const OhMyZshExample = memo(
  ({ speed, keyframes }: Partial<LoaderProps>) => {
    const title = "Oh My Zsh Example";
    const code = useMemo(
      () => `function start_loader() {
    local keyframes=(${keyframes?.map((keyframe) => `"${keyframe}"`).join(" ")}) # Keyframes for the loader
    local speed=${speed} # Speed at which the keyframes change
    local pname=$1 # PID of the process to wait for

    while kill -0 "$pname" 2>/dev/null; do
        for frame in "\${keyframes[@]}"; do
            printf "\\r%s %s" "$frame"
            sleep $speed
        done
    done

    # Clear the loader after the process completes
    printf "\\r%s\\n" "Done!"
}

function custom_loader() {
    # Example of using the loader with a background task
    (sleep 5) &  # Simulate a long-running task in the background
    start_loader $! # Call the loader with the PID of the background process
}`,
      [speed, keyframes],
    );

    return <CodeBlock lang="bash" title={title} code={code} />;
  },
);

OhMyZshExample.displayName = "OhMyZshExample";

export const NextJsComponentExample = memo(({ name }: Partial<LoaderProps>) => {
  const title = "Next.js Component Example";
  const code = useMemo(
    () => `"use client";

import React, { useEffect, useState } from 'react';

type LoaderProps = {
    speed: number;
    keyframes: string[];
    className?: string;
};

export const Loader: React.FC<LoaderProps> = ({ speed, keyframes, className }) => {
    const [currentFrame, setCurrentFrame] = useState(keyframes[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setCurrentFrame(keyframes[index]);
            index = (index + 1) % keyframes.length;
        }, speed);

        return () => clearInterval(interval);
    }, [keyframes, speed]);

    return (
        <div className={className}>{currentFrame}</div>
    );
};

// page.tsx
import { Loader } from "@/components/Loader";
import { ${name} } from "cli-loaders";

const Page = () => (
    <Loader
        speed={${name}.speed}
        keyframes={${name}.keyframes}
        className="relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden"
    />
);

export default Page;`,
    [name],
  );

  return <CodeBlock lang="tsx" title={title} code={code} />;
});

NextJsComponentExample.displayName = "NextJsComponentExample";
