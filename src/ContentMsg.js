import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import queryString from 'query-string';

function ContentMsg(props) {

// const [serverData, setServerData] = useState({});
const [searchString, setSearchString] = useState("");

// useEffect(() => {
//     let parsed = queryString.parse(window.location.search);
//     let accessToken = parsed.access_token;

//     fetch(`https://api.spotify.com/v1/search?q=${searchString}&type=track`, {
//         headers: {'Authorization': 'Bearer ' + accessToken}
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// })

useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    fetch(`https://api.spotify.com/v1/search?q=${searchString}&type=track`, {
        headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then(res => res.json())
    .then(data => console.log(data.tracks.items[0].name + ' by ' + data.tracks.items[0].artists[0].name))
})

// useEffect(() => {
//     let parsed = queryString.parse(window.location.search);
//     let accessToken = parsed.access_token;

//     fetch('https://api.spotify.com/v1/me', {
//         headers: {'Authorization': 'Bearer ' + accessToken}
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// })

// const findSong = (e) => {
//     fetch(`https://api.spotify.com/v1/search`, {
//         headers: {'Authorization': 'Bearer ' + accessToken}
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

    return (
        <div>
            <h1 id="Prompt">Now, what do you want your playlist to say?</h1>
            <input 
                type="text" 
                placeholder="Enter your message here." id="Response"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}>
            </input>
            <br></br>
            <Link to="/title">
                <button 
                id="Next-Btn"
                // onClick={findSong}
                >NEXT</button>
            </Link>
        </div>
    );
}

export default ContentMsg;