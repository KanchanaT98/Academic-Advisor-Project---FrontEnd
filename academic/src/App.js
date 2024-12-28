import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentSignUp from './Pages/StudentSignUp';
import AdvisorSignUp from './Pages/AdvisorSignUp';
import UserSelection from './Pages/UserSelection';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import AdminDashboard from './Pages/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Welcome" element={<Welcome/>}/>
          <Route path="/UserSelection" element={<UserSelection/>}/>
          <Route path="/AdvisorSignUp" element={<AdvisorSignUp/>}/>
          <Route path="/StudentSignUp" element={<StudentSignUp/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/AdminDashboard/*" element={<AdminDashboard />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
