import React, {useState} from 'react';

export default function Form(props) {
    const handleupclick = ()=>{
        console.log('Uppercase Was Click' + text );
        let newText = text.toUpperCase();
        setText (newText)
        props.showAlert("Converted to uppercase!",'success');
    }
    const handleloclick = ()=>{
        console.log('Lowercase Was Click' + text );
        let newText = text.toLowerCase();
        setText (newText)
        props.showAlert("Converted to lowercase!",'success');
    }
    const handleClearclick = ()=>{
        console.log('Clear Text Was Click' + text );
        let newText = '';
        setText (newText)
        props.showAlert("Text Cleared!",'success');
    }  
    const handleonchange = (event)=>{
        console.log('Uppercase Was Click');
        setText (event.target.value);
    }
    const handleCopy =()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!",'success');
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!",'success');
    }
    const [text,setText ] = useState('');  

    return (
        <div>
            <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3"> 
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{background:props.mode==='dark'? 'grey':'white' , color:props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={handleupclick}>Convert To Uppercase</button>
                <button className="btn btn-outline-primary" onClick={handleloclick}>Convert To Lowercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleClearclick}>Clear Text</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'? 'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length}Minutes Time To Read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </div>
    )
}