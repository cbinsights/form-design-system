import { addParameters } from "@storybook/react";

import "../src/components/style/index.css";

addParameters({
  backgrounds: [
    { name: "White", value: "#fff" },
    { name: "Navy", value: "#003366" }
  ],
  options: {
    showRoots: true,
    storySort: (a, b) => {
      if (a[1].kind === b[1].kind) {
        return 0;
      }

      const sectionSort = () => {
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

        return (
          sectionSortOrder[a[1].kind.split("/")[0]] -
          sectionSortOrder[b[1].kind.split("/")[0]]
        );
      };

      const alphabeticalSort = () =>
        a[1].id.localeCompare(b[1].id, { numeric: true });

      return sectionSort() || alphabeticalSort();
    }
  }
});
