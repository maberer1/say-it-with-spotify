import { Link } from 'react-router-dom';
import './App.css';

function Landing(props) {
    return (
        <div id="Container">
            <h1 id="Header">Say It With Spotify</h1>
            <h2 id="Tagline">"Where words fail, music speaks."</h2>
            {/* This button needs to link to Spotify OAuth then redirect to /message */}
            <Link to="/message">
                <button id="Create-A-Playlist-Btn">CREATE A PLAYLIST</button>
            </Link>
            <h6 id="Author-Footer">Code by Madison Aberer</h6>
        </div>
    );
}

export default Landing;