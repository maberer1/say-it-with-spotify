import React from 'react';
import './App.css';

function Finish(props) {
    return (
        <div>
            <h1 id="Success-Msg">Success! Your musical masterpiece is ready to be shared with the world.</h1>
            <button id="View-My-Playlist-Btn">VIEW MY PLAYLIST</button>
            <br></br>
            <button id="New-Playlist-Btn">MAKE ANOTHER ONE!</button>
            <h6 id="Author-Footer">Code by Madison Aberer</h6>
        </div>
    );
}

export default Finish;