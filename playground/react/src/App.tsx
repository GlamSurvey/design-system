//import { useState } from 'react';
import Window from './Window';

import { Button } from '../../../src/components/Buttons/Button';
//import { Logo } from '../../../src/components/Logo/Logo';
import { NavBar } from '../../../src/components/NavBar/NavBar';

function App() {
  const links = [{ label: 'Home', href: '/' }];

  return (
    <>
      {/*<Window>
        <Logo />
      </Window>*/}
      <Window>
        <Button>Ciao</Button>
      </Window>
      <Window>
        <NavBar links={links} />
      </Window>
    </>
  );
}

export default App;
