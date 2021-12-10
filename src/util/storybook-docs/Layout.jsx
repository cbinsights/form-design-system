import React from 'react';
import PropTypes from 'prop-types';
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

const Layout = ({ hasStories = true }) => (
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

Layout.propTypes = {
  hasStories: PropTypes.bool,
};

export const NoStoriesLayout = () => <Layout hasStories={false} />;

export default Layout;
