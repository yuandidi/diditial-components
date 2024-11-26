import React, { useState } from 'react';
import Menu from './components/Menu/menu';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Transition from './components/Transition/transition';
import Button from './components/Button/button';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';

library.add(fas);
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="search" />
        <Input size="lg" icon="search" />
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
        <Button size='lg' onClick={() => { setShow(!show) }}>Toggle</Button>
        <Transition 
          in={show}
          timeout={300}
          animation='zoom-in-left'
        >
        <div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation='zoom-in-left'
          wrapper
        >
          <Button btnType="primary" size="lg">A Large Button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
