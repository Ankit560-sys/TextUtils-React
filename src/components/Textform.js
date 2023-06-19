import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("handle up clicked " +text)
        let newText = text.toUpperCase();
        
        setText(newText)
        props.showAlert('Converted to Uppercase','success :')
    }
    const handleOnChange = (e) => {
        console.log("Text changed")
        setText(e.target.value)
    }
    
    const handleLoClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase','success :')
    }
    const handleOnClear=()=>{
        setText("");
        props.showAlert("Text cleared", "success :");

    }
    

    const [text, setText] = useState("");

    // setText =("vjsuvdsbwsphvpjvd");this is the right way to set text
    //text ="acjabc";is a wrong way to set the text





    return (
        <>

            <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">

                    <textarea className="form-control" id="exampleFormControlTextarea1"  style={{backgroundColor:props.mode ==="dark"?'grey':'white',
                    color:props.mode ==='dark'?'white':'black'}}  onChange={handleOnChange} value={text} rows="8" columns="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleOnClear}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008*text.split(" ").length} Minutes for Reading</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview it here!"}</p>

            </div>
        </>


    )
}
