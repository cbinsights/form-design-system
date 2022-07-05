import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import ImportPath from 'util/storybook-docs/ImportPath';
import Badges from 'util/storybook-docs/Badges';
import Related from 'util/storybook-docs/Related';

export interface LayoutProps {
  hasStories?: boolean;
}

const Layout = ({ hasStories = true }: LayoutProps): JSX.Element => (
  <>
    <Related />
    <Title />
    <Subtitle />
    <Description />
    <ImportPath />
    {hasStories && <Primary />}
    <Badges />
    <ArgsTable story={PRIMARY_STORY} />
    {hasStories && <Stories />}
  </>
);

export const NoStoriesLayout = (): JSX.Element => <Layout hasStories={false} />;

export default Layout;
