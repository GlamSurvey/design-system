//import { useState } from 'react';
import Window from './Window';
import { Button } from '../../../src/components/Buttons/Button';
import { Logo } from '../../../src/components/Logo/Logo';

function App() {
  //const [component, setComponent] = useState(() => <Button></Button>);

  //console.log(setComponent(<Button>Ciao</Button>));

  return (
    <>
      <Window>
        <Button>Ciao</Button>
        <Logo></Logo>
      </Window>
    </>
  );
}

export default App;
