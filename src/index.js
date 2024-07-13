import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import Alert from './components/Alert';

import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function Page() {

    const [mode, setMode] = useState('lg');
    // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({msg : message,
  //     type : type
  //   })
  // }

    const toggleMode = () => {
      if(mode === 'dark') {
        setMode('lg');
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.getElementsByClassName('textbox').style.backgroundColor = "white";
        document.title = "textUtils - Light Mode";
        // showAlert("Dark mode has been enable", "success");
  
      }
      else if(mode === 'lg') {
        setMode('dark');
        document.body.style.backgroundColor = "#003156";
        document.body.style.color = "white";
        document.body.getElementsByClassName('textbox').style.backgroundColor = "#251111";
        document.title = "textUtils - Dark Mode";
        // showAlert("Light mode has been enable", "success");

      }
    }

  

    return(
        <div>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        {/* <Alert alert = {alert} /> */}
        <TextBox  mode = {mode}  />
       
        </div>
    );
}


ReactDOM.render(<Page/>, document.getElementById("root"));