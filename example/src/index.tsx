import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import '@cbinsights/fds/lib/assets/all-styles.min.css';

import { Button } from '@cbinsights/fds/lib/components';

function App() {
  return (
    <div className="padding--all--m">
      <Button label="ok" theme="blue" />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
