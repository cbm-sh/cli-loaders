export const CODE = {
    installation: {
        title: 'Installation',
        lang: 'bash',
        code: `npm install cli-loaders
# or
yarn add cli-loaders
# or
pnpm install cli-loaders
# or
bun add cli-loaders`
    },
    importing: {
        title: 'Importing',
        code: `import { initCliLoader } from 'cli-loaders'; // for initializing`
    },
    initializing: (_slug: string, _speed?: number, _keyframes?: string[]) => ({
        title: 'Initializing',
        code: `import { initCliLoader, ${_slug} } from 'cli-loaders'; // You can import the ${_slug} object

initCliLoader('${_slug}'); // by name
initCliLoader(${_slug}); // by object`
    }),
    customizing: (_slug: string, _speed?: number, _keyframes?: string[]) => ({
        title: 'Customizing',
        code: `import { initCliLoader } from 'cli-loaders';

initCliLoader('${_slug}', 150); // custom speed
initCliLoader('${_slug}', 150, ["..", "."]); // custom speed and keyframes
// or
const myAwesomeLoader = {
    speed: 150,
    keyframes: ["..", "."]
};

initCliLoader(myAwesomeLoader); // custom loader object`
    }),
    stopping: (_slug: string, _speed?: number, _keyframes?: string[]) => ({
        title: 'Stopping',
        code: `import { initCliLoader } from 'cli-loaders';

const intervalId = initCliLoader('${_slug}');

// Stop the loader after some time
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);`
    }),
    ohMyZsh: (_slug?: string, _speed?: number, _keyframes?: string[]) => ({
        title: 'Oh My Zsh',
        lang: 'bash',
        code: `function start_loader() {
    local keyframes=(${_keyframes?.map((keyframe) => `"${keyframe}"`).join(' ')}) # Keyframes for the loader
    local speed=${_speed} # Speed at which the keyframes change
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
}`
    }),
    nextJs: (_slug: string, _speed?: number, _keyframes?: string[]) => ({
        title: 'Next JS',
        code: `"use client";

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
import { ${_slug} } from "cli-loaders";

const Page = () => (
    <Loader
        speed={${_slug}.speed}
        keyframes={${_slug}.keyframes}
        className="relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden"
    />
);

export default Page;`
    }),
};