# cli-loaders

## 3.0.0

### Major Changes

- Full and clean re write of initCliLoader function using constant time to access objects + tree shaking.
- Returning the intervalId so users can clear the loader with clearInterval(intervalId).
- Updated website to reflect changes in the examples sections.
- Site changes and loader updates with the current naming convention (permanent) to follow.

## 2.3.1

### Patch Changes

- named exports updated with all loaders.

## 2.3.0

### Minor Changes

- Added new loader, 'emojis_10'.
- Some loaders have been renamed to follow the naming convention, final change.
- New loader, initCliLoader which takes in a loader name and optional speed and keyframes parameters for full customization.
- Updated data structure for tree shaking.

## 2.2.0

### Minor Changes

- Added animated menu showing all loader links in a grid
- Added animation for grid, buttons, links in grid
- loader name changes - View changelog or website for more
- Footer updated with new links
- Various aria updates
- Changelog page added to site
- Function to parse changelog added
- Github sponsors button added
- Moved icons to Footer
- Added dynamic header to each page
- Custom dynamic sentences for every page visit
- Moved share component towards top of component view
- Changed padding for buttons in component view
- Re styled buttons for sharing
- TopBar now links to Changelog page
- Footer links are temporary, but icons are hidden on small screens
- Memoization and lazy loading techniques and more performance optimizations to come
- Back button on changelog page
- Loader "logo" renamed to "vercel"
- VARIANT LOADER NAMES deleted. Exampe: arrows_variant_1 is now simply just arrows_1, without the variant keyword.
- circle is now circle_1
- circleHalves is now circle_2
- circleQuarters is now circle_3
- balloon is now balloon_1
- balloon2 is now balloon_2
- squareNoise is now squares_5
- squareCorners is now squares_6
- squareDots is now squares_7
- squareDots2 is now squares_8
- squareTriangle is now squares_9
- updated jsdoc comments
- re wrote the loaders file, saving 13kb unminified. Not tested yet
- Added basic logic for invalid speed values

## 2.1.4

### Patch Changes

- rm UnstableCliLoader

## 2.1.3

### Patch Changes

- Import and export UnstableCliLoader

## 2.1.2

### Patch Changes

- UnstableCliLoader added for testing purposes and subject to change.

## 2.1.1

### Patch Changes

- b1542dd: Added a copy keyframes component for site, unstable cli loader to test in production environments'
- Remove unstable react component, optional deps.

## 2.1.0

### Minor Changes

- Next js component now available! New 🚚 loader added in emojis

## 2.0.4

### Patch Changes

- Update package.json with more metadata for npm

## 2.0.3

### Patch Changes

- new loaders added! arrowsv4, arrowsv5, barsv4, barsv5

## 2.0.2

### Patch Changes

- Readme update

## 2.0.1

### Patch Changes

- Readme example bug

## 2.0.0

### Major Changes

- 335fb7a: New! You can now do custom initializations with loaders by using initCustomLoader(speed,keyframes). Learn more on the site! New! Zero dependency initialization, where you just copy the code from the site without installing any other loaders! New fresh site changes'

## 1.1.0

### Minor Changes

- 0bf987b: Added new components!

## 1.0.1

### Patch Changes

- rename material to bar_variant_3

## 1.0.0

### Major Changes

- Import loaders from cli loaders json, updated website with filtering and previews, more to come!

## 0.1.0

### Minor Changes

- Added lines, categories + speed types

## 0.0.4

### Patch Changes

- default export

## 0.0.3

### Patch Changes

- Exposing variables, started example app

## 0.0.2

### Patch Changes

- 52ddd9f: ignore prettier, changesets, npmignore, publish to npm
- 52ddd9f: change project name
