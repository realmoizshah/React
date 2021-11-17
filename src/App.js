import "./App.css";
import Navbar from "./components/Navbar";  
import Form from "./components/Form";  
// import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.background = '#042743';
      showAlert('Dark mode has been enabled','success');
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode ('light');
      document.body.style.background = 'white';
      showAlert('Light mode has been enabled','success');
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/"> */}
              <Form showAlert ={showAlert} heading="Enter Text Below" mode={mode} toggleMode = {toggleMode}/>
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
