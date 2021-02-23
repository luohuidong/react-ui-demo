import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button'

function App() {
  return (
    <div className="App">
      <Button type={ButtonType.Primary}>Primary</Button>
      <Button>Default</Button>
      <Button type={ButtonType.Danger}>Danger</Button>
      <Button disabled>Disabled</Button>
      <Button type={ButtonType.Link}>Link</Button>

      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
