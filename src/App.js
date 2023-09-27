import './App.css';
import Login from './login/Login';
import Explore from './explore/Explore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup/Signup';

function App() {
  return (
    <Router>
      <div>
        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
