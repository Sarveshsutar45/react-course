import React,{useState} from 'react'

export default function (props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);  
        props.showAlert("Converted to UPPERCASE","success"); 
    }
    const handleLowClick = ()=>{
      console.log("Lowercase was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText);   
      props.showAlert("Converted to lowercase","success"); 

  }
  const handleClearClick = ()=>{
    console.log("Clear was clicked " + text);
    let newText = '';
    setText(newText);   
    props.showAlert("Text Cleared","success"); 

}
    const handleOnChange = (event)=>{
        console.log("OnChange was clicked");
        setText(event.target.value);   
    }

    const handleCopy = ()=>{
      console.log("Copy was clicked");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success"); 
      
  }
  

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success"); 

  }
  const countWords = (text) => {
    let words = 0;
    if (text.trim() === "") {
      words = 0;
    } else {
      // Use a regular expression to split the text by non-word characters and filter out empty strings
      const wordsArray = text.trim().split(/\W+/).filter((word) => word !== "");
      words = wordsArray.length;
    }
    return words;
  };
  
  
const [text, setText] = useState('');
  return (<>
<div className="container" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? '#042743':'white',color:props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to UPPERCASE</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{countWords(text)} words and {text.length} characters</p>
  <p>{0.008 * countWords(text)} Minutes to Read</p>    
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview it here."}</p>
</div>
</>
  )
}
