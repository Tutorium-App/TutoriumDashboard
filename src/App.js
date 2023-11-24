import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
