import logo from './logo.svg';
import './App.css';

// IMPORTING COMPONENTS
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return(
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
