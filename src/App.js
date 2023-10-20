//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  const [msg, setMsg] = useState([]);
  //설치 필수
  //npm install axios
  //npm install http-proxymiddleware
  useEffect(() => {
    fetch("/test/test")
        .then((res) => {return res.json();})
        .then((data) => {setMsg(data);})
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
