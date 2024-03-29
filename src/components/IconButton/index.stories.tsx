import React from 'react';
import StarFilledIcon from 'icons/react/StarFilledIcon';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import { StoryObj } from '@storybook/react';
import State from 'util/storybook-docs/State';
import IconButton, { THEMES, RADII, SIZES, IconButtonProps } from '.';

type HashMap = {
  [number: string]: string;
};
const INVERTED_THEMES = THEMES.filter((theme) => theme !== 'aqua');

export const Primary: StoryObj<IconButtonProps> = {
  args: {
    Icon: StarFilledIcon,
  },
};

export const Themes: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps): JSX.Element => (
    <StoryWrapper>
      {THEMES.map((theme, idx) => (
        <StoryItem key={idx}>
          <IconButton {...args} {...Primary.args} theme={theme} />
        </StoryItem>
      ))}
    </StoryWrapper>
  ),
};

export const Destructive: StoryObj<IconButtonProps> = {
  args: { ...Primary.args, isDestructive: true },
};

export const Inverted: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps): JSX.Element => (
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
  ),
};

export const IsActive: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps): JSX.Element => (
    <>
      <StoryWrapper>
        <State
          initialValue={{}}
          render={(
            value: {
              [number: string]: string;
            },
            setValue
          ) => (
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
                  isActive={!value}
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
            render={(value: HashMap, setValue) => (
              <>
                {INVERTED_THEMES.map((theme, idx) => (
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
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`isActive` should be used on buttons to signify the button having some affect (applying a filter, causing a popover to be open). **Click to toggle on and off**.',
      },
    },
  },
};

export const Sizes: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps): JSX.Element => (
    <StoryWrapper>
      {SIZES.map((size, idx) => (
        <StoryItem key={idx}>
          <IconButton {...args} {...Primary.args} size={size} />
        </StoryItem>
      ))}
    </StoryWrapper>
  ),
};

export const Radii: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps): JSX.Element => (
    <StoryWrapper>
      {RADII.map((radius, idx) => (
        <StoryItem key={idx}>
          <IconButton {...args} {...Primary.args} theme={THEMES[1]} radius={radius} />
        </StoryItem>
      ))}
    </StoryWrapper>
  ),
};

export const Breakout: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <div
          className="alignChild--center--center padding--all--xl"
          style={{
            border: '1px dashed #f09',
            position: 'relative',
          }}
        >
          <IconButton {...args} {...Primary.args} isBreakoutLink />
        </div>
      </StoryItem>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breakout buttons extend their clickable area to the next nearest parent.',
      },
    },
  },
};

export const Loading: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <IconButton {...args} {...Primary.args} isLoading />
      </StoryItem>
      <StoryItem>
        <IconButton {...args} {...Primary.args} isDestructive isLoading />
      </StoryItem>
    </StoryWrapper>
  ),
};

export default {
  component: IconButton,
  title: 'Components/IconButton',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
