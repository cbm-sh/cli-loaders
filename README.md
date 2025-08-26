<p><a href="https://cliloaders.com"><img style='border-radius: 12px;filter: drop-shadow(0px 9px 10px #888888);' src="https://repository-images.githubusercontent.com/912560031/de9f3f22-c3a1-4a4d-92f0-4042688be63c" alt="Cli Loaders Repo Github Banner" /></a></p>

# cli-loaders

A collection of cli loaders for your command-line applications.

Visit the [website](https://cliloaders.com) to see all loaders, copy keyframes, and more!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Importing Loaders](#importing-loaders)
  - [Initializing a Loader](#initializing-a-loader)
  - [Customizing the Speed](#customizing-the-speed)
  - [Customizing Everything](#customizing-everything)
  - [Stopping the Loader](#stopping-the-loader)
- [Available Loaders](#available-loaders)
- [Examples](#examples)
  - [Oh My Zsh Example](#oh-my-zsh-example)
  - [Next.js Component Example](#nextjs-component-example)
- [Contributing](#contributing)
- [License](#license)
- [Special Thanks](#special-thanks)

## Installation

To install the package, use npm or yarn:

```bash
npm install cli-loaders;
# or
yarn add cli-loaders;
# or
bun install cli-loaders;
```

## Usage

### Importing Loaders

Import the loader initializer:

```typescript
import { initCliLoader } from 'cli-loaders';
```

### Initializing a Loader

You can initialize any loader by its name using `initCliLoader`:

```typescript
import { initCliLoader, dots_1 } from 'cli-loaders';

// Initialize by name
initCliLoader('dots_1');

// initCliLoader(dots_1);
```

### Customizing the Speed

You can also customize the speed of the loader:

```typescript
import { initCliLoader, dots_1 } from 'cli-loaders';

// Initialize with custom speed
initCliLoader('dots_1', 150);
// initCliLoader(dots_1, 150);
```

### Customizing Everything

New in v2.0+, you can import the cli loader initializer, `initCliLoader` for full customization:

```typescript
import { initCliLoader, dots_14 } from 'cli-loaders';
```

Then use it with your own speed and keyframe arguments:

```typescript
import { initCliLoader, dots_14 } from 'cli-loaders';

initCliLoader(dots_14); // Render loader
initCliLoader(dots_14, 100); // Render loader with custom speed
initCliLoader(dots_14, 100, ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"]); // Render loader with speed and keyframes customized
```

Or you could customize it with an object:

```typescript
const myAwesomeLoader = {
    speed: 100,
    keyframes: ["..", "."]
};

initCliLoader(myAwesomeLoader);
```

### Stopping the Loader

To stop the loader, you can use `clearInterval` with the interval ID returned by `initCliLoader`:

```typescript
import { initCliLoader } from 'cli-loaders';

const intervalId = initCliLoader('dots_1');

// Stop the loader after some time
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
```

## Available Loaders

Here are some of the available loaders you can use:

- `arrows_1`
- `arrows_2`
- `bars_1`
- `bars_2`
- `circles_1`
- `circles_2`
- `dots_1`
- `dots_2`
- `emojis_1`
- `emojis_2`
- `lines_1`
- `lines_2`
- `numbers_1`
- `numbers_2`
- `squares_1`
- `squares_2`
- `symbols_1`
- `symbols_2`
- `togglers_1`
- `togglers_2`

For a full list of available loaders, please refer to the [source code](/src/cli-loaders.ts) or the [website](https://cliloaders.com).

## Examples

### Oh My Zsh Example

```bash
function start_loader() {
    local keyframes=(YOUR_COPIED_KEYFRAMES) # Keyframes for the loader
    local speed=0.1 # Speed at which the keyframes change
    local pname=$1 # PID of the process to wait for

    while kill -0 "$pname" 2>/dev/null; do
        for frame in "${keyframes[@]}"; do
            printf "\r%s %s" "$frame"
            sleep $speed
        done
    done

    # Clear the loader after the process completes
    printf "\r%s\n" "Done!"
}

function custom_loader() {
    # Example of using the loader with a background task
    (sleep 5) &  # Simulate a long-running task in the background
    start_loader $! # Call the loader with the PID of the background process
}
```

### Nextjs Component Example

```tsx
// @/components/Loader.tsx
"use client";

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
```

Then import and use the component:

```tsx
import { Loader } from "@/components/Loader";
import { dots_14 } from "cli-loaders";

const Page = () => (
    <Loader
        speed={dots_14.speed}
        keyframes={dots_14.keyframes}
        className="relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden"
    />
);

export default Page;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Special Thanks

Special thanks to [cli-spinners](https://www.npmjs.com/package/cli-spinners) and [sindresorhus](https://github.com/sindresorhus) for the json file for some of the loaders in this project.

