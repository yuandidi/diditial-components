import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="costum">
          Hello
        </Button>
        <Button disabled size={ButtonSize.large}>
          Disabled Button
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.small}>
          Small Danger
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.large} target="_blank">
          Baidu Link
        </Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.large}>
          Disabled Link
        </Button>
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
