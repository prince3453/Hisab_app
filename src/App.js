import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://media.licdn.com/dms/image/D4E03AQEtP-BRwfWHSg/profile-displayphoto-shrink_400_400/0/1688178996620?e=1710374400&v=beta&t=FbREITtSuFqzb2flLB3SVFtpVbz9Rl3MDRo-u1evjlo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <a
          className="App-link"
          href="./HomePage.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open HomePage
        </a>
      </header>
    </div>
  );
}

export default App;
