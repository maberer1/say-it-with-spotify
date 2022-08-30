import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import queryString from 'query-string';

function ContentMsg(props) {

useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    console.log(parsed)
})

    return (
        <div>
            <h1 id="Prompt">Now, what do you want your playlist to say?</h1>
            <input type="text" placeholder="Enter your message here." id="Response"></input>
            <br></br>
            <Link to="/title">
                <button id="Next-Btn">NEXT</button>
            </Link>
        </div>
    );
}

export default ContentMsg;