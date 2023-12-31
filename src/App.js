/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
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
*/

import React from 'react';

import './App.css';
import Form from './components/Form';
import Bucle from './components/Bucle';
import Contador from './components/Contador';
import Compclass from './components/Compclass';

 import Menunav from './components/Menunav';


const  App = () => {

  return (
    <div className="App">
     
      <div className="App-content">

         <Menunav/>
        <p>Mi app React
        </p>
        {/*<Form/>
        <Bucle/>
        <Contador/> */
        }
        <Compclass name="colon"/>

      </div>
    </div>
  );
}

export default App;