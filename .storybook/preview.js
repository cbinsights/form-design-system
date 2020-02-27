import { addParameters } from '@storybook/react';

import '../src/components/style/index.css';

addParameters({
  backgrounds: [
    { name: 'White', value: '#fff' },
    { name: 'Navy', value: '#003366' },
  ],
  options: {
    showRoots: true,
    storySort: (a, b) => {

      if (a[1].kind === b[1].kind){
        return 0;
      }

      const sectionSortOrder = ['intro', 'ui', 'design', 'icons', 'components'];

      const sortOrder = (() => { 
        const ordering = {}; // map for efficient lookup of sortIndex
        for (var i=0; i<sectionSortOrder.length; i++)
          ordering[sectionSortOrder[i]] = i;
        return ordering
      })();

      // split on slashes and use that, as hyphens are also generated from spaces
      const sectionSort = () => sortOrder[a[0].split('-')[0]] - sortOrder[b[0].split('-')[0]]
      const alphabeticalSort = () => a[1].id.localeCompare(b[1].id, { numeric: true })

      return (sectionSort() || alphabeticalSort())

    }
  },
});
