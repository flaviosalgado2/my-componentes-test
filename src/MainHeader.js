import logo from './logo.svg';

//componente criado via funcao
export const MainHeader = props => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.message}</h1>
      </header>
);