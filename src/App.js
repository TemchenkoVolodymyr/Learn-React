import logo from './logo.svg';
import './App.css';
import FirstMessage from "./components/firstMessage"
import headerImage from "./assets/cat.png"

function App() {
  return (
    <div className="App">
      <FirstMessage message="Hello World" image={headerImage}/>
    </div>
  );
}

export default App;
