import React from 'react';
import SearchIcon from 'lib/icons/react/SearchIcon';
import TextInput from 'components/TextInput';
import InputGroup from '.';

export const dropdownVariations = (args) => (
  <>
    <div className="margin--bottom">
      <InputGroup {...args}>
        <select name="type">
          <option value="1">Horse-size duck</option>
          <option value="2">Duck-size horse</option>
        </select>
        <input type="text" placeholder="Name of pet" />
        <select name="color">
          <option value="1">Yellow</option>
          <option value="2">Brown</option>
          <option value="2">White</option>
        </select>
      </InputGroup>
    </div>
    <div className="margin--bottom">
      <InputGroup {...args}>
        <input type="number" defaultValue="666" />
        <select name="unit">
          <option value="1">Million</option>
          <option value="2">Thousand</option>
        </select>
      </InputGroup>
    </div>
    <div className="margin--bottom"></div>
    <div className="margin--bottom">
      <InputGroup {...args}>
        <select name="currencty">
          <option value="USD">$</option>
          <option value="GBP">￡</option>
          <option value="YEN">￥</option>
        </select>
        <input type="number" defaultValue="666" />
      </InputGroup>
    </div>
  </>
);

export const textInputs = (args) => (
  <InputGroup {...args}>
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Middle Name" />
    <input type="text" placeholder="Last Name" />
  </InputGroup>
);

export const growAndShrink = (args) => (
  <InputGroup {...args} flexSettings={['grow', 'shrink', 'grow']}>
    <TextInput
      before="$"
      type="number"
      defaultValue="100"
      label="Money"
      showLabel={false}
    />
    <select name="unit">
      <option value="1">Million</option>
      <option value="2">Thousand</option>
    </select>
    <input type="text" placeholder="Investor Name" />
  </InputGroup>
);

growAndShrink.parameters = {
  docs: {
    description: {
      story:
        'Use the `flexSettings` prop to control the flex behavior of each input segment. In this example, the first and last inputs are set to `grow` and the middle input will `shrink` to the natural width of the select.',
    },
  },
};

export const otherExamples = (args) => (
  <>
    <label>Valuation</label>
    <InputGroup {...args}>
      <TextInput
        before="$"
        type="number"
        defaultValue="666"
        label="Money"
        showLabel={false}
      />
      <select name="unit">
        <option value="1">Million</option>
        <option value="2">Thousand</option>
      </select>
    </InputGroup>
    <div className="margin--top--s" />
    <InputGroup {...args}>
      <TextInput
        IconLeft={SearchIcon}
        placeholder="Search"
        type="search"
        label="Search"
        showLabel={false}
      />
      <select name="unit">
        <option value="1">Companies</option>
        <option value="2">Investors</option>
      </select>
    </InputGroup>
  </>
);

export default {
  component: InputGroup,
  title: 'components/InputGroup',
  parameters: {
    componentSubtitle: 'Visually groups multiple form fields on one line.',
  },
};
