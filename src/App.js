import logo from './woodstock.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          2학년 1반 8번 박민서
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          프론트엔드 개발자
        </a>
      </header>
    </div>
  );
}

export default App;
