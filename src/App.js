//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setmodeText] = useState('dark');
  const [alert, setalert] = useState(null);
  const showAlert=(message, type)=>
  {
    setalert({
      msg:message,
      type:type  
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toggleMode=()=>
  {
    if(mode==='light'){
        setMode('dark');
        setmodeText('light');
        document.body.style.backgroundColor='#3b4045';
        document.body.style.color='white';
        showAlert("Dark mode has been enabled","success")
      }
    else{
        setMode('light');
        setmodeText('dark');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        showAlert("Light mode has been enabled","success")
      }
        
  }
  return (
    <>  
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
    <Alert alert={alert}/>
    <div className="container mb-3">
    <TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
    </div>
        </>
  );
}

export default App;
