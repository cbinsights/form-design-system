import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import '@cbinsights/fds/lib/assets/all-styles.min.css';

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
} from '@cbinsights/fds/lib/components';

function App() {
  return (
    <div className="padding--all--m">
      <Button label="ok" theme="blue" />

      <Avatar name="CB" />

      <Badge label="42" />

      <Checkbox label="checkbox label" />

      <Chip label="chip label" />

      <TextInput label="input" />

      <Indicator label="indicator" />

      <SeparatorList items={['item1', 'item2', 'item...']} />

      <DropdownButton children={'placeholder'} />

      <Radio name="radio group" label="radio" />

      <DateInput />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
