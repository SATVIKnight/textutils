import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (messagem, type)=>{
    setAlert({
      msg: messagem,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleLight =() =>{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled", "success");
    document.title = 'TextUtil';
  }

  const toggleDark = () =>{
    setMode('dark');
    document.body.style.backgroundColor = '#021526';
    showAlert("Dark mode enabled", "success");
    document.title = 'TextUtil';
  }

  const toggleGreen = () =>{
    setMode('green');
      document.body.style.backgroundColor = '#365E32';
      showAlert("Green mode enabled", "success");
      setInterval(() => {
        document.title = 'its green now';
      }, 2127);
      setInterval(() => {
        document.title = 'very greeeen'
      }, 1435);
  }
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#021526';
      showAlert("Dark mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <Router>
    <Navbar title = "ABCSD" mode= {mode} toggleMode = {toggleMode} toggleDark = {toggleDark} toggleGreen= {toggleGreen} toggleLight= {toggleLight}/>
    <Alert alert= {alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <TextForm showAlert={showAlert} heading = "Enter content to analize:" mode= {mode}/>
          </Route>
     </Switch>
    
    </div>
    </Router>
  );
}

export default App;