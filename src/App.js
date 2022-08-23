import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Content from './Content';
import Create from './Create';
import Finish from './Finish';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/finish" element={<Finish/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;