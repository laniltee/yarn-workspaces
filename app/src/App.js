import logo from './logo.svg';
import './App.css';
import {dateTimeUtils} from 'shared/utils'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    This is App
                </a>
                <p>Formatted Time from Shared Util: {dateTimeUtils.getFormattedCurrentDate()}</p>
            </header>
        </div>
    );
}

export default App;
