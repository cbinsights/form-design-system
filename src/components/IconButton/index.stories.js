import React from 'react';
import StarFilledIcon from 'lib/icons/react/StarFilledIcon';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import State from 'util/storybook-docs/State';

import IconButton, { THEMES, RADII, SIZES } from '.';

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Icon: StarFilledIcon,
};

export const Themes = (args) => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <IconButton {...args} {...Primary.args} theme={theme} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Destructive = Template.bind({});
Destructive.args = {
  ...Primary.args,
  isDestructive: true,
};

export const Inverted = (args) => (
  <div className="inverted bgColor--blue padding--all rounded--all">
    <StoryWrapper>
      <StoryItem>
        <IconButton {...args} {...Primary.args} theme="ghost" />
      </StoryItem>
      <StoryItem>
        <IconButton {...args} {...Primary.args} theme="outlined" />
      </StoryItem>
    </StoryWrapper>
  </div>
);

export const isActive = (args) => (
  <>
    <StoryWrapper>
      <State
        initialValue={{}}
        render={(value, setValue) => (
          <>
            {THEMES.map((theme, idx) => (
              <StoryItem key={idx}>
                <IconButton
                  {...args}
                  {...Primary.args}
                  theme={theme}
                  isActive={!value[idx]}
                  onClick={() => setValue({ ...value, [idx]: !value[idx] })}
                />
              </StoryItem>
            ))}
          </>
        )}
      />
      <State
        initialValue={false}
        render={(value, setValue) => (
          <>
            <StoryItem>
              <IconButton
                {...args}
                {...Primary.args}
                isDestructive
                isActive={!value[0]}
                onClick={() => setValue(!value)}
              />
            </StoryItem>
          </>
        )}
      />
    </StoryWrapper>
    <div className="inverted bgColor--blue padding--all rounded--all margin--top">
      <StoryWrapper>
        <State
          initialValue={{}}
          render={(value, setValue) => (
            <>
              {['ghost', 'outlined'].map((theme, idx) => (
                <StoryItem key={idx}>
                  <IconButton
                    {...args}
                    {...Primary.args}
                    theme={theme}
                    isActive={!value[idx]}
                    onClick={() => setValue({ ...value, [idx]: !value[idx] })}
                  />
                </StoryItem>
              ))}
            </>
          )}
        />
      </StoryWrapper>
    </div>
  </>
);

isActive.parameters = {
  docs: {
    description: {
      story:
        '`isActive` should be used on buttons to signify the button having some affect (applying a filter, causing a popover to be open). **Click to toggle on and off**.',
    },
  },
};

export const Sizes = (args) => (
  <StoryWrapper>
    {SIZES.map((size, idx) => (
      <StoryItem key={idx}>
        <IconButton {...args} {...Primary.args} size={size} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Radii = (args) => (
  <StoryWrapper>
    {RADII.map((radius, idx) => (
      <StoryItem key={idx}>
        <IconButton {...args} {...Primary.args} theme={THEMES[1]} radius={radius} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Loading = (args) => (
  <StoryWrapper>
    <StoryItem>
      <IconButton {...args} {...Primary.args} isLoading />
    </StoryItem>
    <StoryItem>
      <IconButton {...args} {...Primary.args} isDestructive isLoading />
    </StoryItem>
  </StoryWrapper>
);

export default {
  component: IconButton,
  title: 'components/IconButton',
  parameters: {
    docs: {
      attributes: ['rest'],
    },
  },
};
