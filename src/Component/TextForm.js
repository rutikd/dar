import React, { useState } from 'react'

export const TextForm = (props) => {
    let handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Convert to Uppercase","success")
    }
    let handleLoclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Convert to Lowercase","success")
    }
    let handClLoclick = () => {
        setText('')
        props.showalert("text Cleared ","success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("Somethig speak","success")
    }
   
    let handleupchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
            <>
            <div className='container my-5' style={{color: props.mode === 'dark'?'white':'black'}} >
                <h1 className='text-center'>{props.heading}</h1>
             <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleupchange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'dark'?'white':'black'}} id="mytext" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleupclick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoclick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-3' onClick={handClLoclick}>Clear text</button>
            <button className='btn btn-primary mx-3' onClick={speak}>Speak</button>
            
          </div>
          <div className='container my-5' style={{color: props.mode === 'dark'?'white':'black'}}>
             <h2>Your Text Summary</h2>
             <p>{text.split(" ").length-1}  words and {text.length} characters</p>
             <p>{0.008 * text.split(" ").length}</p>
             <h2>Preview</h2>
             <p>{text.length===0?"Text is Empty":text}</p>
          </div>
        </>
    )
}

