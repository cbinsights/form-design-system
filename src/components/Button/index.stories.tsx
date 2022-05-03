import React from 'react';
import State from 'util/storybook-docs/State';
import { StoryObj } from '@storybook/react';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import { StarFilledIcon, WorldIcon } from 'icons/react';
import Button, { ButtonProps, THEMES, Theme, SIZES } from '.';

const INVERTED_THEMES: Theme[] = ['ghost', 'outlined'];

export const Primary: StoryObj<ButtonProps> = {
  render: ({ label = 'Button', ...args }: ButtonProps) => (
    <Button {...args} label={label} />
  ),
  args: {
    label: 'Button',
  },
};

export const Themes: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <StoryWrapper>
      {THEMES.map((theme, idx) => (
        <StoryItem key={idx}>
          <Button {...args} theme={theme} label={theme} />
        </StoryItem>
      ))}
    </StoryWrapper>
  ),
};

export const IsDestructive: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <StoryWrapper>
      {THEMES.map((theme, idx) => (
        <StoryItem key={idx}>
          <Button {...args} isDestructive theme={theme} label={theme} />
        </StoryItem>
      ))}
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Modifies the theme. Should only be used when the interaction involves data loss, and should also prompt the user to confirm the action.',
      },
    },
  },
};

export const Inverted: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <div className="inverted bgColor--blue padding--all rounded--all">
      <StoryWrapper>
        <StoryItem>
          <Button {...args} theme="ghost" label="Button" />
        </StoryItem>
        <StoryItem>
          <Button {...args} theme="outlined" label="Button" />
        </StoryItem>
      </StoryWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'We currently support inverting `ghost` and `outlined` theme buttons. Simply surround the button(s) with an `.inverted` class.',
      },
    },
  },
};

type Shape = {
  [key: number]: boolean;
};
const initialValue: Shape = {};

export const IsActive: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <>
      <StoryWrapper>
        <State
          initialValue={initialValue}
          render={(value, setValue) => (
            <>
              {THEMES.map((theme, idx) => (
                <StoryItem key={idx}>
                  <Button
                    {...args}
                    theme={theme}
                    isActive={!value[idx]}
                    label={theme}
                    onClick={() => setValue({ ...value, [idx]: !value[idx] })}
                  />
                </StoryItem>
              ))}
            </>
          )}
        />
        <State<Shape>
          initialValue={{}}
          render={(value, setValue) => (
            <>
              {THEMES.map((theme, idx) => (
                <StoryItem key={idx}>
                  <Button
                    theme={theme}
                    isActive={!value[idx]}
                    isDestructive
                    label={theme}
                    onClick={() => setValue({ ...value, [idx]: !value[idx] })}
                  />
                </StoryItem>
              ))}
            </>
          )}
        />
      </StoryWrapper>
      <div className="inverted bgColor--blue padding--all rounded--all margin--top">
        <StoryWrapper>
          <State
            initialValue={initialValue}
            render={(value, setValue) => (
              <>
                {INVERTED_THEMES.map((theme, idx) => (
                  <StoryItem key={idx}>
                    <Button
                      theme={theme}
                      isActive={!value[idx]}
                      label={theme}
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

export const Sizes: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <>
      {SIZES.map((size, idx) => (
        <div
          key={idx}
          className="display--inlineBlock margin--right--s margin--bottom--s"
        >
          <Button {...args} size={size} label="Button" />
        </div>
      ))}
    </>
  ),
};

export const FullWidth: StoryObj<ButtonProps> = {
  render: ({ label = 'Button', ...args }: ButtonProps) => (
    <Button {...args} label={label} />
  ),
};

export const Icons: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <Button {...args} IconLeft={WorldIcon} label="Button" />
      </StoryItem>
      <StoryItem>
        <Button {...args} IconRight={StarFilledIcon} label="Button" />
      </StoryItem>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'ONLY pass in FDS Icon references to `IconLeft` or `IconRight`. Very important. (refer to code sample)',
      },
    },
  },
};

export const Caret: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <Button {...args} theme="blue" hasCaret label="Caret" />
      </StoryItem>
      <StoryItem>
        <Button
          {...args}
          theme="blue"
          hasCaret
          IconRight={StarFilledIcon}
          label="Caret"
        />
      </StoryItem>
      <StoryItem>
        <Button
          {...args}
          theme="blue"
          hasCaret
          IconRight={StarFilledIcon}
          label="Caret"
        />
      </StoryItem>
    </StoryWrapper>
  ),
};

export const Loading: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <>
      <StoryWrapper>
        {THEMES.map((theme, idx) => (
          <StoryItem key={idx}>
            <Button {...args} theme={theme} isLoading label="Button" />
          </StoryItem>
        ))}
        {THEMES.map((theme, idx) => (
          <StoryItem key={idx}>
            <Button {...args} theme={theme} isDestructive isLoading label="Button" />
          </StoryItem>
        ))}
      </StoryWrapper>
      <div className="inverted bgColor--blue padding--all rounded--all margin--top">
        <StoryWrapper>
          <StoryItem>
            <Button {...args} theme="ghost" isLoading label="Button" />
          </StoryItem>
          <StoryItem>
            <Button {...args} theme="outlined" isLoading label="Button" />
          </StoryItem>
        </StoryWrapper>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Loading states should be shown whenever an action has the ability to take more than a couple of seconds of loading time',
      },
    },
  },
};

export const Breakout: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <div
          className="alignChild--center--center padding--all--xl"
          style={{
            border: '1px dashed #f09',
            position: 'relative',
          }}
        >
          <Button {...args} label="Button" isBreakoutLink />
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

export const Misc: StoryObj<ButtonProps> = {
  render: (args: ButtonProps): JSX.Element => (
    <div
      style={{
        width: '100px',
      }}
    >
      <Button {...args} label="Text can wrap" />
    </div>
  ),
};

export default {
  component: Button,
  title: 'components/Button',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
