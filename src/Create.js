import { Link } from 'react-router-dom';
import './App.css';

function Create(props) {
    return (
        <div>
            <h1 id="Create-Prompt">Time to make the magic happen!</h1> 
                {/* This button needs to create playlist then also redirect to /finish page */}
            <Link to="/finish">
                <button id="Build-My-Playlist-Btn">BUILD MY PLAYLIST</button>
            </Link>
        </div>
    );
}

export default Create;