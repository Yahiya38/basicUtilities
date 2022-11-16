
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar name='utilities' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
      {/* <div className="container">
          <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
          </Routes>
        </div> */}
        {<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}
      </div>
    </>
  );
}

export default App;
