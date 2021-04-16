### High level explanation for FDS Icons

- All of our FDS Icons reflect a set of Icons that CB Insights designers have in their system. We do not accept any other outside icons.
- These Icons live in closed source Sketch file that can only be accessed by CB Insights employees.

### Making requests to add new icons to Abstract

- In order for us to add an icon to FDS, it must be added to the UI Platform Icons set by a product designer here: https://app.abstract.com/projects/0b3bf318-e4a9-4319-8a9f-52f161094fb2/branches/master/files/D109C042-4BC3-434D-844A-6F3AA9E2881C
- You (a CB Insights developer) can request a new icon be added to that file in this Slack channel: https://cbinsights.slack.com/archives/C01TDGQ0T47

#### Requesting icons be to FDS (for CB Insights employees)

Most of you will want to request the icons be added to FDS rather than doing it yourselves:

- Verify that the icon you need is in Abstract first: https://app.abstract.com/projects/0b3bf318-e4a9-4319-8a9f-52f161094fb2/branches/master/files/D109C042-4BC3-434D-844A-6F3AA9E2881C
- Request that we re-run our icon export script in this channel: https://cbinsights.slack.com/archives/CL99MD596

#### Actually adding Icons to FDS

To regenerate the icons, you must

1. Be a CB Insights employee and request access to this
   [Abstract Project](https://app.goabstract.com/organizations/0bd48624-8826-4447-a082-1957932b89b8/projects)
2. Ensure you have [Sketch](https://www.sketchapp.com/) installed.
3. Ensure the `sketchtool` binary is in your PATH:

```bash
## bash
export SKETCHTOOL_PATH="/Applications/Sketch.app/Contents/Resources/sketchtool/bin"
export PATH=$PATH:SKETCHTOOL_PATH
## fish
set -U /Applications/Sketch.app/Contents/Resources/sketchtool/bin $fish_user_paths
```

4. Ensure you have the [Abstract Desktop App](https://app.abstract.com/download)
5. In Abstract Desktop app in the sidebar, select **FDS** --> **Master** in the sidebar
6. Click on `Files` in the main screen
7. Right click on the UI Platform Icons.sketch file
8. Click "Export" and save it somewhere easy to remember. You'll need the path to this file in the next step.
9. Run the following in the root of FDS:

```
yarn icons:export <path to sketch file>
```

9. In general (if everything seems fine) you'll commit all the new files that were generated.
10. You can view icons in storybook to verify your icons were generated correctly.

Note: Icons follow general SEMVER rules (adding an icon is a minor update, removing an icon is a major update).

##### Known issues

- Icons should be contained in _exportable artboards_
- Icon artboards should be named with prefix `icon/`
- No two icons should be named the same thing. The export script will helpfully
  throw an error if any duplicates are detected.
