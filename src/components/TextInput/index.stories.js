import React from 'react';
import CaretDownIcon from 'lib/icons/react/CaretDownIcon';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import InputGroup from 'components/InputGroup';
import State from 'util/storybook-docs/State';

import TextInput from '.';

export const Primary = (args) => <TextInput {...args} label="First Name" />;

export const exampleLayout = () => (
  <>
    <Flex>
      <FlexItem>
        <TextInput label="First Name" showRequired />
      </FlexItem>
      <FlexItem>
        <TextInput label="Last Name" showRequired />
      </FlexItem>
    </Flex>
    <br />
    <Flex>
      <FlexItem>
        <TextInput
          type="email"
          label="Email"
          errorText="Enter a valid email address"
          placeholder="e.g. anand@cbinsights.com"
        />
      </FlexItem>
      <FlexItem>
        <TextInput type="password" label="Password" />
      </FlexItem>
      <FlexItem>
        <TextInput type="number" label="Zipcode" after="90210" />
      </FlexItem>
    </Flex>
  </>
);

export const controlledInput = (args) => (
  <State
    initialValue="Controlled"
    render={(value, setValue) => (
      <TextInput
        {...args}
        label="Controlled"
        showLabel={false}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )}
  />
);

export const Icons = (args) => (
  <TextInput
    {...args}
    label="Icons"
    showLabel={false}
    IconLeft={CaretDownIcon}
    IconRight={CaretDownIcon}
  />
);

export const Throttled = (args) => (
  <TextInput
    {...args}
    label="Icons"
    showLabel={false}
    IconLeft={CaretDownIcon}
    IconRight={CaretDownIcon}
    onThrottledChange={action('changed')}
  />
);

export const sideLabel = (args) => (
  <TextInput
    {...args}
    label="Side Label"
    showLabel={false}
    before="before"
    after="after"
  />
);

export const formManagementLibrary = (args) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(action('submitted'))}>
        <div className="margin--bottom--s">
          <TextInput
            {...args}
            label="Username"
            name="username"
            type="text"
            errorText={errors.username && errors.username.message}
            ref={register({
              validate: (value) => value !== 'admin' || 'Nice try!',
            })}
          />
        </div>
        <TextInput
          {...args}
          label="Email"
          name="email"
          type="text"
          errorText={errors.email && errors.email.message}
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

formManagementLibrary.parameters = {
  docs: {
    description: {
      story:
        'You may use this input in any form management library you would like. We recommend `react-hook-form`, which is used in the example below:',
    },
  },
};

export const misc = () => (
  <>
    <InputGroup>
      <TextInput before="$" type="number" value="666" label="Misc" showLabel={false} />
      <select name="unit">
        <option value="1">Million</option>
        <option value="2">Thousand</option>
      </select>
    </InputGroup>
    <br />
    <InputGroup>
      <TextInput
        IconLeft={CaretDownIcon}
        type="number"
        value="666"
        label="Misc"
        showLabel={false}
      />
      <select name="unit">
        <option value="1">Million</option>
        <option value="2">Thousand</option>
      </select>
    </InputGroup>
    <br />
    <InputGroup>
      <TextInput
        IconRight={CaretDownIcon}
        type="number"
        value="666"
        label="Misc"
        showLabel={false}
      />
      <select name="unit">
        <option value="1">Million</option>
        <option value="2">Thousand</option>
      </select>
    </InputGroup>
    <br />
    <TextInput label="Label on left with width" labelPosition="left" labelWidth="100px" />
  </>
);

export default {
  component: TextInput,
  title: 'components/TextInput',
  parameters: {
    componentSubtitle: 'Standard recommended input component',
    docs: {
      fds: {
        attributes: ['rest'],
      },
      description: {
        component:
          'Can be used for simple no frills inputs, as well as complex inputs complete with accessibile labels, Icons, side labels, errorText, throttled events, and more.',
      },
    },
  },
};
