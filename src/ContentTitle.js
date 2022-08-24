import { Link } from 'react-router-dom';
import './App.css';

function ContentTitle(props) {
    return (
        <div>
            <h1 id="Prompt">Wanna give it a title?</h1>
            <input type="text" placeholder="Oooh, name it something good." id="Response"></input>
            <br></br>
            <Link to="/create">
                <button id="Next-Btn">NEXT</button>
            </Link>
        </div>
    );
}

export default ContentTitle;