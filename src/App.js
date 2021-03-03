import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p > COMENTARIO PARA CODERHOUSE < /p > <
        a className = "App-link"
        href = "https://github.com/angorozco/angeapp"
        target = "_blank"
        rel = "noopener noreferrer" >
        GITHUB ANGELICA < /a>  < /
        header > <
        /div>
    );
}

export default App;