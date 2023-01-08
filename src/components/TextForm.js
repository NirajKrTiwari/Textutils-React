import React, {useState} from 'react'
//import "./TextForm.css";
export default function TextForm(props) {
  const handleUpClick=()=>
  {
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLowClick=()=>
  {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleClearClick=()=>
  {
    let newText='';
    setText(newText);
    props.showAlert("Clear","success");
  }
  const handleOnClick=(event)=>
  {
    // console.log("On change");
    setText(event.target.value);
  }
  const handleCopy=()=>
  {
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied","success");
  }
  const handleExtraSpace=()=>
  {
    var newtext=text.split(/[ ]+/);
    
    setText(newtext.join(" "))
    props.showAlert("Extra space is removed","success");
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnClick} rows="8" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white',border:props.mode==='light'?'solid black 1.5px':'solid white 1.5px'}}></textarea>
        </div>
        <div className='d-grid gap-2 d-md-block'>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>
    </div>
    <div className="container my-4">
      <h1>Your text summary</h1>
      <p>{text.length>0?text.split(" ").length:"0"} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
