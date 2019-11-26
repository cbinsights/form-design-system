import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Dialog from './Dialog';
import README from './Dialog.md';
import Button from '../interactive/Button';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';

storiesOf('Modals/Dialog', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Dialog
        isOpen={boolean('isOpen', true)}
        footerContent={text('footerContent', '')}
        content={text('content', 'Modal content here')}
        onDismiss={
          boolean('onDismiss', true)
            ? () => {
                // eslint-disable-next-line no-console
                console.log('close modal');
              }
            : undefined
        }
        title={text('title', 'Modal title here')}
      />
    ),
    {
      notes: { markdown: README },
      docs: { disable: true },
    }
  )
  .add(
    'Variation: Scrolling content',
    () => (
      <Dialog
        isOpen={true}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci. Placerat vestibulum lectus mauris ultrices eros in cursus. Neque laoreet suspendisse interdum consectetur. Ut porttitor leo a diam. Quisque egestas diam in arcu cursus euismod quis viverra. Eget nunc lobortis mattis aliquam. Mauris pharetra et ultrices neque ornare aenean euismod. Luctus accumsan tortor posuere ac. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Non arcu risus quis varius quam quisque id diam. Vel pharetra vel turpis nunc eget lorem dolor sed. Risus quis varius quam quisque id diam vel quam elementum. Velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Egestas maecenas pharetra convallis posuere morbi leo. Pellentesque pulvinar pellentesque habitant morbi tristique. Habitasse platea dictumst quisque sagittis purus. Fermentum dui faucibus in ornare quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Turpis egestas integer eget aliquet. Bibendum est ultricies integer quis auctor elit sed vulputate. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Lectus urna duis convallis convallis tellus id interdum velit. A arcu cursus vitae congue mauris rhoncus aenean. Odio euismod lacinia at quis risus sed vulputate odio. Nibh tellus molestie nunc non. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. A erat nam at lectus urna duis convallis convallis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mauris sit amet massa vitae tortor condimentum lacinia. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Risus quis varius quam quisque id diam vel. Id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing vitae proin."
        onDismiss={() => {
          // eslint-disable-next-line no-console
          console.log('close modal');
        }}
        title="Long content area"
      />
    ),
    {
      docs: { disable: true },
    }
  )
  .add(
    'Variation: Scrolling content w/footer',
    () => (
      <Dialog
        isOpen={true}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci. Placerat vestibulum lectus mauris ultrices eros in cursus. Neque laoreet suspendisse interdum consectetur. Ut porttitor leo a diam. Quisque egestas diam in arcu cursus euismod quis viverra. Eget nunc lobortis mattis aliquam. Mauris pharetra et ultrices neque ornare aenean euismod. Luctus accumsan tortor posuere ac. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Non arcu risus quis varius quam quisque id diam. Vel pharetra vel turpis nunc eget lorem dolor sed. Risus quis varius quam quisque id diam vel quam elementum. Velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Egestas maecenas pharetra convallis posuere morbi leo. Pellentesque pulvinar pellentesque habitant morbi tristique. Habitasse platea dictumst quisque sagittis purus. Fermentum dui faucibus in ornare quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Turpis egestas integer eget aliquet. Bibendum est ultricies integer quis auctor elit sed vulputate. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Lectus urna duis convallis convallis tellus id interdum velit. A arcu cursus vitae congue mauris rhoncus aenean. Odio euismod lacinia at quis risus sed vulputate odio. Nibh tellus molestie nunc non. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. A erat nam at lectus urna duis convallis convallis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mauris sit amet massa vitae tortor condimentum lacinia. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Risus quis varius quam quisque id diam vel. Id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing vitae proin."
        onDismiss={() => {
          // eslint-disable-next-line no-console
          console.log('close modal');
        }}
        footerContent={<Button>Confirm</Button>}
        title="Long content area w/footer"
      />
    ),
    {
      docs: { disable: true },
    }
  )
  .add(
    'Variation: customizable footer',
    () => (
      <Dialog
        isOpen={true}
        content={<Button>Customizable footer</Button>}
        onDismiss={() => {
          // eslint-disable-next-line no-console
          console.log('close modal');
        }}
        footerContent={
          <div>
            <Flex align="center">
              <FlexItem shrink>
                <Button>Anything</Button>
              </FlexItem>
              <FlexItem shrink>
                <Button theme="outlined">Can go</Button>
              </FlexItem>
              <FlexItem shrink>
                <p>in the</p>
              </FlexItem>
              <FlexItem shrink>
                <input placeholder="footer" />
              </FlexItem>
            </Flex>
            <p className="margin--top">Lorem ipsum dolor</p>
          </div>
        }
      />
    ),

    {
      docs: { disable: true },
    }
  );
