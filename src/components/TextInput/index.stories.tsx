import React from 'react';
import CaretDownIcon from 'icons/react/CaretDownIcon';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import { useForm } from 'react-hook-form';
import InputGroup from 'components/InputGroup';
import State from 'util/storybook-docs/State';
import TextInput, { TextInputProps } from '.';
import { noop } from 'util/index';
import { StoryObj } from '@storybook/react';

export const Primary: StoryObj<TextInputProps> = {
  args: {
    label: 'First Name',
  },
};

export const ExampleLayout: StoryObj<TextInputProps> = {
  render: ({ onChange }: TextInputProps): JSX.Element => (
    <>
      <Flex>
        <FlexItem>
          <TextInput label="First Name" showRequired onChange={onChange} />
        </FlexItem>
        <FlexItem>
          <TextInput label="Last Name" showRequired onChange={onChange} />
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
            onChange={onChange}
          />
        </FlexItem>
        <FlexItem>
          <TextInput type="password" label="Password" onChange={onChange} />
        </FlexItem>
        <FlexItem>
          <TextInput type="number" label="Zipcode" after="90210" onChange={onChange} />
        </FlexItem>
      </Flex>
    </>
  ),
};

export const ControlledInput: StoryObj<TextInputProps> = {
  render: ({ onChange = noop, ...args }: TextInputProps): JSX.Element => (
    <State
      initialValue="Controlled"
      render={(value, setValue) => (
        <TextInput
          {...args}
          label="Controlled"
          showLabel={false}
          value={value}
          onChange={(e) => {
            onChange(e);
            setValue(e.target.value);
          }}
        />
      )}
    />
  ),
};

export const Icons: StoryObj<TextInputProps> = {
  args: {
    label: 'Icons',
    showLabel: false,
    IconLeft: CaretDownIcon,
    IconRight: CaretDownIcon,
  },
};

export const SideLabel: StoryObj<TextInputProps> = {
  args: {
    label: 'Side Label',
    showLabel: false,
    before: 'before',
    after: 'after',
  },
};

export const FormManagementLibrary: StoryObj<TextInputProps> = {
  render: ({ onChange, ...args }: TextInputProps): JSX.Element => {
    const { register, handleSubmit, formState } = useForm();
    const registeredUsername = register('Username', {
      validate: (value) => value !== 'admin' || 'Nice try!',
    });
    const registeredEmail = register('Email', {
      required: 'Required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'invalid email address',
      },
    });
    return (
      <div>
        <form onSubmit={handleSubmit(() => {})}>
          <div className="margin--bottom--s">
            <TextInput
              {...args}
              label="Username"
              name="username"
              type="text"
              errorText={formState.errors.username && formState.errors.username.message}
              ref={registeredUsername.ref}
              onChange={onChange}
            />
          </div>
          <TextInput
            {...args}
            label="Email"
            name="email"
            type="text"
            errorText={formState.errors.email && formState.errors.email.message}
            ref={registeredEmail.ref}
            onChange={onChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'You may use this input in any form management library you would like. We recommend `react-hook-form`, which is used in the example below:',
      },
    },
  },
};

export const Misc: StoryObj<TextInputProps> = {
  render: ({ onChange }: TextInputProps): JSX.Element => (
    <>
      <InputGroup>
        <TextInput
          before="$"
          type="number"
          defaultValue={666}
          label="Misc"
          showLabel={false}
          onChange={onChange}
        />
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
          defaultValue={666}
          label="Misc"
          showLabel={false}
          onChange={onChange}
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
          defaultValue={666}
          label="Misc"
          showLabel={false}
          onChange={onChange}
        />
        <select name="unit">
          <option value="1">Million</option>
          <option value="2">Thousand</option>
        </select>
      </InputGroup>
      <br />
      <TextInput
        label="Label on left with width"
        labelPosition="left"
        labelWidth="100px"
        onChange={onChange}
      />
    </>
  ),
};

export default {
  component: TextInput,
  title: 'Components/TextInput',
  argTypes: {
    onChange: {
      action: 'onChange',
    },
  },
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
