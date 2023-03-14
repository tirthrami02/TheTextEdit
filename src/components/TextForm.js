import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const he = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted into Uppercase", "success");
    }
    
    const she = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted into Lowercase", "success");
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }

    const myFun = () => {
        let copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select(); 
        copyText.setSelectionRange(0, 99999); // For mobile devices // not needed
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
        // Alert the copied text
        alert("Copied the text: " + copyText.value);
        props.showAlert("Text copied to your clipboard", "success");
    }
    const dlt = () => {
        setText("");
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2C3333', color: props.mode === 'dark' ? 'white' : 'black' }} onChange = {handleOnChange} id="myBox" placeholder='Enter yout text' rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={he} >Convert to Upppercase</button>
                <button className="btn btn-success mx-2" onClick={she} >Convert to Lowercase</button>
                <button className="btn btn-danger mx-2" onClick={myFun} >Copy to Clipboard</button>
                <button className="btn btn-warning mx-2" onClick={dlt} >Clear Board</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>You will take approx. {0.008 * text.split(" ").length} minutes to read it.</p>
                <h2>Preview</h2>
                <p>{text.length> 0 ? text:"Enter your text for view Preview."}</p>
            </div>
        </>
    )
}
