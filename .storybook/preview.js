import React from 'react';
import { addParameters } from "@storybook/react";
import FDS from 'lib/dictionary/js/styleConstants';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import ImportPath2 from 'util/storybook-docs/ImportPath2';

import "../src/components/style/index.css";

export const parameters = {
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  docs: {
    page: () => (
      <>
        <Title />
        <ImportPath2 />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    )
  },
  backgrounds: {
    default: 'White',
    values: [
      { name: "White", value: FDS.COLOR_WHITE },
      { name: "Haze", value: FDS.COLOR_HAZE},
      { name: "Navy", value: FDS.COLOR_NAVY },
      { name: "Hot Pink", value: "#F09"}
    ],
  },
  options: {
    showRoots: true,
    storySort: {
      method: 'alphabetical',
      order: [
        "Intro",
        "UI Guidelines",
        "Design Tokens",
        "Icons",
        "Style Utilities",
        "Components",
        "Examples"
      ],
      locales: ''
    }
  }
};
