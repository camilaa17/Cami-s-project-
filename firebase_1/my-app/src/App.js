import logo from './logo.svg';
import './App.css';
import Auth from "./components/auth";
import Posts from "./components/post";

function App() {
  return (
    <div className="App">
      <Auth></Auth>
      <Posts></Posts>
    </div>
  );
}

export default App;
