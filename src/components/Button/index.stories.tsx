import React from 'react';
import State from 'util/storybook-docs/State';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import { StarFilledIcon, WorldIcon } from 'lib/icons/react';
import Button, { ButtonProps, THEMES, SIZES } from '.';

const Template = (args): JSX.Element => <Button label="Button" {...args} />;

export const Primary = Template.bind({});

export const Themes = (): JSX.Element => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <Button theme={theme} label={theme} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const isDestructive = (): JSX.Element => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <Button isDestructive theme={theme} label={theme} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

isDestructive.parameters = {
  docs: {
    description: {
      story:
        'Modifies the theme. Should only be used when the interaction involves data loss, and should also prompt the user to confirm the action.',
    },
  },
};

export const Inverted = (): JSX.Element => (
  <div className="inverted bgColor--blue padding--all rounded--all">
    <StoryWrapper>
      <StoryItem>
        <Button theme="ghost" label="Button" />
      </StoryItem>
      <StoryItem>
        <Button theme="outlined" label="Button" />
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

export const isActive = (): JSX.Element => (
  <>
    <StoryWrapper>
      <State
        initialValue={{}}
        render={(value, setValue) => (
          <>
            {THEMES.map((theme, idx) => (
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
      <State
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
          initialValue={{}}
          render={(value, setValue) => (
            <>
              {['ghost', 'outlined'].map((theme, idx) => (
                <StoryItem key={idx}>
                  <Button
                    theme={theme}
                    isActive={!value[idx]}
                    label={theme}
                    onClick={() => setValue({ ...value, [idx]: !value[idx] })}
                    data-test="hey"
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

export const Sizes = (): JSX.Element => (
  <>
    {SIZES.map((size, idx) => (
      <div key={idx} className="display--inlineBlock margin--right--s margin--bottom--s">
        <Button size={size} label="Button" />
      </div>
    ))}
  </>
);

export const FullWidth = Template.bind({});
FullWidth.args = {
  isFullWidth: true,
};

export const Icons = (): JSX.Element => (
  <StoryWrapper>
    <StoryItem>
      <Button IconLeft={WorldIcon} label="Button" />
    </StoryItem>
    <StoryItem>
      <Button IconRight={StarFilledIcon} label="Button" />
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

export const Caret = (): JSX.Element => (
  <StoryWrapper>
    <StoryItem>
      <Button theme="blue" hasCaret label="Caret" />
    </StoryItem>
    <StoryItem>
      <Button theme="blue" hasCaret IconRight={StarFilledIcon} label="Caret" />
    </StoryItem>
    <StoryItem>
      <Button theme="blue" hasCaret IconRight={StarFilledIcon} label="Caret" />
    </StoryItem>
  </StoryWrapper>
);

export const Loading = (): JSX.Element => (
  <>
    <StoryWrapper>
      {THEMES.map((theme, idx) => (
        <StoryItem key={idx}>
          <Button theme={theme} isLoading label="Button" />
        </StoryItem>
      ))}
      {THEMES.map((theme, idx) => (
        <StoryItem key={idx}>
          <Button theme={theme} isDestructive isLoading label="Button" />
        </StoryItem>
      ))}
    </StoryWrapper>
    <div className="inverted bgColor--blue padding--all rounded--all margin--top">
      <StoryWrapper>
        <StoryItem>
          <Button theme="ghost" isLoading label="Button" />
        </StoryItem>
        <StoryItem>
          <Button theme="outlined" isLoading label="Button" />
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

export const Misc = (): JSX.Element => (
  <div style={{ width: '100px' }}>
    <Button label="Text can wrap" />
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
