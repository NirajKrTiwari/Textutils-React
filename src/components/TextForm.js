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
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnClick} rows="8" value={text} style={{backgroundColor:props.mode==='light'?'white':'#ada8a85e',color:props.mode==='light'?'black':'white',border:props.mode==='light'?'solid black 1.5px':'solid white 1.5px'}}></textarea>
        </div>
        <div className='d-grid gap-2 d-md-block'>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
        </div>
    </div>
    <div className="container my-4">
      <h1>Your text summary</h1>
      <p>{text.length>0?text.split(/\s+/).filter((element)=>{return element.length!==0}).length:"0"} words and {text.trim().length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
