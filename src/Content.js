import React from 'react';
import './App.css';

function Content(props) {
    return (
        <div>
            <h1 id="Prompt">Now, what do you want your playlist to say?</h1>
            <input type="text" placeholder="Enter your message here." id="Response"></input>
            <br></br>
            <button id="Next-Btn">NEXT</button>
        </div>
    );
}

export default Content;