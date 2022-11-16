import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Uppercase" , "success");
    }
    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }
    const handleClClick = () => {
        const newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log('hi');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div  style={{color : props.mode==='light'?'black':'white'}}> 
                <div className="mb-3 m-4">
                    <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='light'?'white':'grey' , color : props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-4" onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary" onClick={handleLoClick} >Convert to lowercase</button>
                <button className="btn btn-primary mx-4" onClick={handleClClick} >Clear Text</button>
            </div>
            <div className="conatiner my-3 " style={{color : props.mode==='light'?'black':'white'}}>
                 <h1>Your Text Summary</h1>
                 <p>{text.split(" ").length} words and {text.length} characters</p>
                 <p>{0.008 * text.split(" ").length} minutes reads</p>
                 <h2>Preview</h2>
                 <p>{text.length > 0?text:"Enter something to preview it here"}</p>
            </div>
        </>
    )
}
