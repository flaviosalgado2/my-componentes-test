import './App.css';
import { MainHeader } from './MainHeader';
import { MainHeaderClass } from './MainHeaderClass';

function App() {
  return (
    <div className="App">

      <MainHeader message="Olá Mundo PUCMG!"/>

      <MainHeaderClass message="Olá Mundo PUCMG - componente via classses."/>
    
    </div>  
  );
}

export default App;
