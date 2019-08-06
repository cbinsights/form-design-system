# `fds-icons`
Icon library for Form Design System

## Getting Started

### Usage

#### As a React component (recommended)
```
import CloudIcon from 'form-design-system/lib/icons/react/CloudIcon';

const UploadButton = () => {
  <button>
    <CloudIcon />
    Upload yourself to the cloud
  </button>
};
```

Every Icon component from `fds-icons` accepts the following props:

Prop        | Type     | Default | Description
----------- | -------- | ------- | -----------------
`color`     | `String` | `COLOR_CHARCOAL` | Color of `fill` for SVG
`size`      | `xs`,`s`,`m`,`l`,`xl` | `s` | Standard media size of icon
`className` | `String` |         | custom class name

#### As raw SVG
```
import cloudSvg from 'form-design-system/lib/raw/Cloud.svg';

const LookAtCloudComponent = () => {
  <p>Check out this cloud: {cloudSvg}</p>
}
```


------

## Development

### Updating icons from a Sketch file
This project uses `sketchtool` to export SVG icons directly from a sketch file provided by the design team. You must have [Sketch](https://www.sketchapp.com/) installed in order to run the export command.

#### 1) Setting up `sketchtool`
If you don't already have `sketchtool` on your system, follow these steps:

1. Install [Sketch](https://www.sketchapp.com/)
2. Add the `sketchtool` binary to your PATH:

```bash
export SKETCHTOOL_PATH="/Applications/Sketch.app/Contents/Resources/sketchtool/bin"
export PATH=$PATH:SKETCHTOOL_PATH
```

#### 2) Getting the icons sketch file
Talk to your friendly local product designer for a google drive link to our `Icons.sketch`
file.

##### Known issues
- Icons should be contained in _exportable artboards_
- Icon artboards should be named with prefix `icon/`
- No two icons should be named the same thing. The export script will helpfully
  throw an error if any duplicates are detected.

#### 3) Running the export
This project uses a node script to automate `sketchtool` commands.
Run it **from the root of the `form-design-system` repo**.

```
yarn icons:export <path to sketch file>
```

This will export SVG files to `packages/fds-icons/src/`.

#### Verifying changes
A good way to verify icons exported as expected is to run a build on the icons package and check the regenerated docs.

```
yarn build:icons
```

Once the build is complete you can open `docs/fds-icons/index.html` in a browser to see
changes/additions to the icon set.

#### 4) Bump the version number
When adding or changing icons, please bump the **minor** version number for FDS. When removing
icons, bump the **major** version number.
