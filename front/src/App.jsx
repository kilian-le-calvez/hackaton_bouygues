import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import GetToken from './Components/GetToken';
import HomePage from './Components/HomePage';
import LogPage from './Components/LogPage';

import './App.css';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}/>
            <Route path="/login" element={<LogPage></LogPage>}/>
            <Route path="/getToken" element={<GetToken></GetToken>}/>
          </Routes>
      </Router>
  );
}

export default App;
