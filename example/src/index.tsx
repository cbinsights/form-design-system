import React from 'react';
import ReactDOM from 'react-dom';
import HamburgerBarsIcon from '@cbinsights/fds/icons/react/HamburgerBarsIcon';

import './styles.css';
import '@cbinsights/fds/lib/assets/all-styles.min.css';

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Chip,
  IconButton,
  TextInput,
  Indicator,
  SeparatorList,
  DropdownButton,
  FloatingAction,
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

      <IconButton label="icon label" icon={HamburgerBarsIcon} />

      <TextInput label="input" />

      <Indicator label="indicator" />

      <SeparatorList items={['item1', 'item2', 'item...']} />

      <DropdownButton />

      <FloatingAction icon={HamburgerBarsIcon} label="floating action" />

      <Radio name="radio group" label="radio" />

      <DateInput />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
