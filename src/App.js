import logo from './logo.svg';
import './App.css';
import CreateUser from './component/user/create';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome in our first React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CreateUser />
      {/* <LoginIndex /> */}
    </div>
  );
}

export default App;
