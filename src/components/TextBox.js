import React, {useState} from 'react';


function TextBox(props) {
    const [text, setText] = useState("");

     const handleUpOnClick = () => {
        let newText = text.toUpperCase();
setText(newText);
    }

    const handleLowOnClick = () => {
        let newText = text.toLowerCase();
setText(newText);
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }


    const handleClearText = () => {
        setText("");
    }

    const handleCopyText = () => {
      let textBox = document.getElementById("my-box")
      textBox.select();
      navigator.clipboard.writeText(textBox.value);
    }

const handleExtraSpaces = () => {
  console.log('done')
  let updateText = text.split(/[ ]+/);
  setText(updateText.join(" "));
}

    return (  
        <div>
        <div className="form-floating">
            <h1 className='my-2'>Enter Your Text Here !</h1>
  <textarea className='textbox'
  rows={15} 
cols = {150}
  value = {text}
  onChange = {handleOnChange}
id = "my-box"
style={{backgroundColor : props.mode=== 'lg' ? 'white' : "#251111", 
color : props.mode === 'lg' ? 'black' : 'white'
}}
  />
  {/* <label htmlFor="floatingTextarea">Comments</label> */}
  </div>

<div className='btn'>
<button type="button" className="btn btn-outline-primary mx-2" onClick= {handleUpOnClick}>
    Convert to Uppercase
  </button>
  <button type="button" className="btn btn-outline-secondary mx-2" onClick={handleLowOnClick}>
Convert to Lowercase
  </button>

  <button type="button" className="btn btn-outline-success mx-2" onClick={handleClearText}>
   Clear Text
  </button>
   <button type="button" className="btn btn-outline-danger mx-2" onClick={handleCopyText}>
Copy Text
  </button>
   <button type="button" className="btn btn-outline-warning mx-2" onClick={handleExtraSpaces}>
   Remove Extra Spaces
  </button>
  {/* <button type="button" className="btn btn-outline-info">
    Info
  </button>
  <button type="button" className="btn btn-outline-light">
    Light
  </button>
  <button type="button" className="btn btn-outline-dark">
    Dark
  </button>   */}

  </div>

<div>
    <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Number of Words</p>
        <p>{text.length} Numbers of Character</p>
        <p>{0.08 * (text.split(" ").length)} minutes takes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>

</div>
    );
}

export default TextBox;