import { Link } from 'react-router-dom';
import './App.css';

function ContentMsg(props) {
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