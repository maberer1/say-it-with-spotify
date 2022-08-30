import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import ContentMsg from './ContentMsg';
import ContentTitle from './ContentTitle';
import Create from './Create';
import Finish from './Finish';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/title" element={<ContentTitle/>}/>
        <Route path="/message" element={<ContentMsg/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/finish" element={<Finish/>}/>
        {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
      </Routes>
    </div>
  );
}

export default App;