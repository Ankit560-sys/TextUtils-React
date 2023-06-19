
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');   //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success : ');
      document.title = "TextUtils-Dark mode"
      setInterval(() => {
        document.title = "TextUtils is amazing app"

      }, 2000);
      setInterval(() => {
        document.title = " Install TextUtils now"

      }, 2000);
    }
    else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success : ');
      document.title = "TextUtils-Light mode"
    }

  }

  return (
    //JSX - Javascript syntax Extension
    //wrap them with  JSX fragment for more than one element 

    //class to classname
    //html for to htmlFor 
    //tabindex  to tabIndex
    // add / in the end of img tag,input tag
    <>
      {/* <BrowserRouter> */}



        <Navbar title="TextUtils" homeText="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container my-3 ">


          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
          <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />

            {/* }></Route> */}
          {/* </Routes> */}

          {/* <About/> */}
        </div>

      {/* </BrowserRouter> */}

    </>
  );
}


export default App;
