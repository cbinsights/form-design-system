# `fds-icons`
Icon library for Form Design System

## Getting Started

### Installation

```
yarn add -D fds-icons
```

### Usage

#### As a React component (recommended)
```
import CloudIcon from 'fds-icons/lib/react/CloudIcon';

const UploadButton = () => {
  <button>
    <CloudIcon />
    Upload yourself to the cloud
  </button>
};
```

Every Icon component from `fds-icons` accepts the following props:

Prop    | Type     | Default | Description
------- | -------- | ------- | -----------------
`color` | `String` | `COLOR_CHARCOAL` | Color of `fill` for SVG
`size`  | `xs`,`s`,`m`,`l`,`xl` | `s` | Standard media size of icon

#### As raw SVG
```
import cloudSvg from 'fds-icons/lib/raw/Cloud.svg';

const LookAtCloudComponent = () => {
  <p>Check out this cloud: {cloudSvg}</p>
}
```


------

## Development

### Yarn commands

Command | Description
------- | ------------
`yarn build` | builds docs, minified SVG files to `dist/raw`, and react components to `dist/react`
`yarn export <sketch file>` | exports icons as SVG from a sketch file to `src/`

### Regenerating `dist/` and docs
The `dist/` dir contains the following build artifacts:

- optimized raw SVG files in `dist/raw`
- react components (in the style of [material-ui](https://github.com/mui-org/material-ui/tree/master/packages/material-ui-icons)) in `dist/react`

To regenerate these files, run:

```
yarn build
```

### Updating icons from a Sketch file
This project uses `sketchtool` to export SVG icons directly from a sketch file provided by the design team. You must have [Sketch](https://www.sketchapp.com/) installed in order to run the export command.

#### Setting up `sketchtool`

1. Install [Sketch](https://www.sketchapp.com/)
2. Add the `sketchtool` binary to your PATH:

```bash
export SKETCHTOOL_PATH="/Applications/Sketch.app/Contents/Resources/sketchtool/bin"
export PATH=$PATH:SKETCHTOOL_PATH
```

#### Running the export
This project uses a node script to automate `sketchtool` commands. Run it with `yarn`:

```
yarn export <path to sketch file>
```

This will export SVG files to `src/`.
