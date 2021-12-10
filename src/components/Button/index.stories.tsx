import React from 'react';
import State from 'util/storybook-docs/State';
import { Story } from '@storybook/react';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import { StarFilledIcon, WorldIcon } from 'icons/react';
import Button, { ButtonProps, THEMES, Theme, SIZES } from '.';

const Template = ({ label = 'Button', ...args }: ButtonProps) => (
  <Button {...args} label={label} />
);

const INVERTED_THEMES: Theme[] = ['ghost', 'outlined'];

export const Primary: Story<ButtonProps> = Template.bind({});

Primary.args = { label: 'Button' };

export const Themes = (args: ButtonProps): JSX.Element => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <Button theme={theme} label={theme} {...args} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const IsDestructive = (args: ButtonProps): JSX.Element => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <Button isDestructive theme={theme} label={theme} {...args} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

IsDestructive.parameters = {
  docs: {
    description: {
      story:
        'Modifies the theme. Should only be used when the interaction involves data loss, and should also prompt the user to confirm the action.',
    },
  },
};

export const Inverted = (args: ButtonProps): JSX.Element => (
  <div className="inverted bgColor--blue padding--all rounded--all">
    <StoryWrapper>
      <StoryItem>
        <Button theme="ghost" label="Button" {...args} />
      </StoryItem>
      <StoryItem>
        <Button theme="outlined" label="Button" {...args} />
      </StoryItem>
    </StoryWrapper>
  </div>
);

Inverted.parameters = {
  docs: {
    description: {
      story:
        'We currently support inverting `ghost` and `outlined` theme buttons. Simply surround the button(s) with an `.inverted` class.',
    },
  },
};

type Shape = {
  [key: number]: boolean;
};

const initialValue: Shape = {};

export const IsActive = (args: ButtonProps): JSX.Element => (
  <>
    <StoryWrapper>
      <State
        initialValue={initialValue}
        render={(value, setValue) => (
          <>
            {THEMES.map((theme, idx) => (
              <StoryItem key={idx}>
                <Button
                  theme={theme}
                  isActive={!value[idx]}
                  label={theme}
                  onClick={() => setValue({ ...value, [idx]: !value[idx] })}
                  {...args}
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
                  {...args}
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
                    {...args}
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

IsActive.parameters = {
  docs: {
    description: {
      story:
        '`isActive` should be used on buttons to signify the button having some affect (applying a filter, causing a popover to be open). **Click to toggle on and off**.',
    },
  },
};

export const Sizes = (args: ButtonProps): JSX.Element => (
  <>
    {SIZES.map((size, idx) => (
      <div key={idx} className="display--inlineBlock margin--right--s margin--bottom--s">
        <Button size={size} label="Button" {...args} />
      </div>
    ))}
  </>
);

export const FullWidth: Story<ButtonProps> = Template.bind({});
FullWidth.args = {
  isFullWidth: true
};

export const Icons = (args: ButtonProps): JSX.Element => (
  <StoryWrapper>
    <StoryItem>
      <Button IconLeft={WorldIcon} label="Button" {...args} />
    </StoryItem>
    <StoryItem>
      <Button IconRight={StarFilledIcon} label="Button" {...args} />
    </StoryItem>
  </StoryWrapper>
);

Icons.parameters = {
  docs: {
    description: {
      story:
        'ONLY pass in FDS Icon references to `IconLeft` or `IconRight`. Very important. (refer to code sample)',
    },
  },
};

export const Caret = (args: ButtonProps): JSX.Element => (
  <StoryWrapper>
    <StoryItem>
      <Button theme="blue" hasCaret label="Caret" {...args} />
    </StoryItem>
    <StoryItem>
      <Button theme="blue" hasCaret IconRight={StarFilledIcon} label="Caret" {...args} />
    </StoryItem>
    <StoryItem>
      <Button theme="blue" hasCaret IconRight={StarFilledIcon} label="Caret" {...args} />
    </StoryItem>
  </StoryWrapper>
);

export const Loading = (args: ButtonProps): JSX.Element => (
  <>
    <StoryWrapper>
      {THEMES.map((theme, idx) => (
        <StoryItem key={idx}>
          <Button theme={theme} isLoading label="Button" {...args} />
        </StoryItem>
      ))}
      {THEMES.map((theme, idx) => (
        <StoryItem key={idx}>
          <Button theme={theme} isDestructive isLoading label="Button" {...args} />
        </StoryItem>
      ))}
    </StoryWrapper>
    <div className="inverted bgColor--blue padding--all rounded--all margin--top">
      <StoryWrapper>
        <StoryItem>
          <Button theme="ghost" isLoading label="Button" {...args} />
        </StoryItem>
        <StoryItem>
          <Button theme="outlined" isLoading label="Button" {...args} />
        </StoryItem>
      </StoryWrapper>
    </div>
  </>
);

Loading.parameters = {
  docs: {
    description: {
      story:
        'Loading states should be shown whenever an action has the ability to take more than a couple of seconds of loading time',
    },
  },
};

export const Breakout = (args: ButtonProps): JSX.Element => (
  <StoryWrapper>
    <StoryItem>
      <div
        className="alignChild--center--center padding--all--xl"
        style={{ border: '1px dashed #f09', position: 'relative' }}
      >
        <Button {...args} label="Button" isBreakoutLink />
      </div>
    </StoryItem>
  </StoryWrapper>
);

Breakout.parameters = {
  docs: {
    description: {
      story: 'Breakout buttons extend their clickable area to the next nearest parent.',
    },
  },
};

export const Misc = (args: ButtonProps): JSX.Element => (
  <div style={{ width: '100px' }}>
    <Button label="Text can wrap" {...args} />
  </div>
);

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
