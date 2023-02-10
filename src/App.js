//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import logoFree from './imagenes/logo.webp';

import Contador from './componentes/Contador';
import Boton from './componentes/Boton';

function App() {

  const [numClicks, setNumeroClicks] = useState(0); // hooks

  const manejarClick = () => {
    setNumeroClicks(numClicks + 1);
  };

  const reiniciar = () => {
    setNumeroClicks(0);
  };

  return (
    <div className="App py-3 d-flex justify-content-center align-items-center flex-wrap flex-column">

      <header className='col-12 d-flex justify-content-center align-items-center p-1'>
        <img className='logo-imagen col-6'
          src={logoFree}
          alt="Logo de FreeCode"
        />
      </header>
      <main className='col-12 d-flex justify-content-center align-items-center flex-wrap flex-column'>
        <Contador numeroClicks={numClicks} />
        <Boton texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick} />
        <Boton texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciar} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
