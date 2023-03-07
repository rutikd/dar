import './App.css';
// import { About } from './Component/About';
import { Navbar } from './Component/Navbar';
import { TextForm } from './Component/TextForm';
import { useState } from 'react';
import { Alert } from './Component/Alert';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (message,type) => {
     setalert({
        msg: message,
        type: type
     })
     setTimeout(() => {
        setalert(null)
     }, 1500);
  }

  const togglemode = () => {
     if(mode === 'light'){
       setmode('dark');
       document.body.style.backgroundColor = 'blue';
       showalert("Dark mode has been enabled","success");
       document.title = "TextUtils - Dark mode"
     }
     else{
       setmode('light');
       document.body.style.backgroundColor = 'white';
       showalert("Light mode has been enabled","success")
       document.title = "TextUtils"
     }
  }

  return (
    <>
      <Navbar mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter Text" mode={mode} showalert={showalert}/>
     
      {/* <BrowserRouter>
           <Navbar mode={mode} togglemode={togglemode}/>
           <Alert alert={alert}/>
       <div className="container my-4">
           <Routes>
               <Route exact path='/' element={<TextForm heading="Enter Text" mode={mode} showalert={showalert}/>}/>
               <Route exact path='/about' element={<About/>}/>
           </Routes>
      </div>
      </BrowserRouter> */}
    </>
  );
}

export default App;
