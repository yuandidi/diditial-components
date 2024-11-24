import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' onSelect={(index) => {alert(index)}} defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link1
          </MenuItem>
          <MenuItem disabled={true}>
            cool link2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdow1
            </MenuItem>
            <MenuItem>
              dropdow2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link3
          </MenuItem>
        </Menu>
        
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
