import React, {useState} from 'react'

export default function TextForm(prop) {

    function countWords(str) {
        str = str.trim(); 
        if (str === "") {
          return 0;
        }
        const words = str.split(/\s+/);
        return words.length;
      }

    const handleUpClick = () =>{
        let newTxt = text.toUpperCase();
        setText(newTxt);
        prop.showAlert("Converted to uppercase", "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCLClick = (event)=>{
        setText("");
        prop.showAlert("Cleared", "success");
    }
    const[text, setText] =useState('');
  return (
    <><div className="container" style={{color:prop.mode==='light'? 'black': 'white'}}>
    <h1>{prop.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control my-1" style={{backgroundColor: prop.mode==='light'? 'white': prop.mode === 'dark' ? '#7776B3': '#81A263'}} value= {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} style={{backgroundColor: prop.mode==='light'? 'black': prop.mode === 'dark' ? 'blue': 'green'}}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCLClick} style={{backgroundColor: prop.mode==='light'? 'black': prop.mode === 'dark' ? 'blue': 'green'}}>Clear</button>
    </div>
    </div>
    <div className="container my-4" style={{color:prop.mode==='light'? 'black': 'white'}}>
        <h1>Your text summary</h1>
        <p>{countWords(text)} words {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
