import { addParameters } from "@storybook/react";
import FDS from 'lib/dictionary/js/styleConstants';

import "../src/components/style/index.css";

addParameters({
  backgrounds: [
    { name: "White", value: FDS.COLOR_WHITE },
    { name: "Haze", value: FDS.COLOR_HAZE},
    { name: "Navy", value: FDS.COLOR_NAVY }
  ],
  options: {
    showRoots: true,
    storySort: (a, b) => {
      if (a[1].kind === b[1].kind) {
        return 0;
      }

      const sectionSortOrder = [
        "Intro",
        "UI Guidelines",
        "Design Tokens",
        "Icons",
        "Style Utilities",
        "Components"
      ].reduce((ordering, section, i) => {
        ordering[section] = i;
        return ordering;
      }, {});

      const sectionSort = () => {
        return (
          sectionSortOrder[a[1].kind.split("/")[0]] -
          sectionSortOrder[b[1].kind.split("/")[0]]
        );
      };

      const alphabeticalSort = () =>
        a[1].id.localeCompare(b[1].id, { numeric: true }) + Object.keys(sectionSortOrder).length;

      return sectionSort() || alphabeticalSort()
    }
  }
});
