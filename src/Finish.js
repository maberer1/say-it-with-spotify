import { Link } from 'react-router-dom';
import './App.css';

function Finish(props) {
    return (
        <div>
            <h1 id="Success-Msg">Success! Your musical masterpiece is ready to be shared with the world.</h1>
            {/* This button needs to redirect to Spotify */}
            <button id="View-My-Playlist-Btn">VIEW MY PLAYLIST</button>
            <br></br>
            {/* This button needs to redirect to /message */}
            <Link to="/message">
                <button id="New-Playlist-Btn">MAKE ANOTHER ONE!</button>
            </Link>
            <h6 id="Author-Footer">Code by Madison Aberer</h6>
        </div>
    );
}

export default Finish;