import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import '@cbinsights/fds/lib/assets/all-styles.min.css';
import ActionsArrowUpIcon from '@cbinsights/fds/lib/icons/react/ActionsArrowUpIcon';

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Chip,
  TextInput,
  Indicator,
  SeparatorList,
  DropdownButton,
  Radio,
  DateInput,
  Popover,
} from '@cbinsights/fds/lib/components';

function App() {
  return (
    <div className="padding--all--m">
      <Button label="ok" theme="blue" IconRight={ActionsArrowUpIcon} />

      <Avatar name="CB" />

      <Badge label="42" />

      <Checkbox label="checkbox label" />

      <Chip label="chip label" />

      <TextInput label="input" />

      <Indicator label="indicator" />

      <SeparatorList items={['item1', 'item2', 'item...']} />

      <DropdownButton>Placeholder</DropdownButton>

      <Radio name="radio group" label="radio" value="1" />

      <DateInput />

      <Popover
        transitionName="GrowFast"
        trigger={
          <div className="margin--bottom">
            <Button label="show popover" />
          </div>
        }
      >
        <div
          className="padding--all"
          style={{ outline: '3px dotted red', background: '#FFFFFF' }}
        >
          popover content
        </div>
      </Popover>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
