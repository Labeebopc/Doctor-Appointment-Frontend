import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import './App.css';


function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/register")
    }
  }, [])


  return (
    <>
      <Routes>
        <Route exact path='dashboard' element={<Homepage />} />
        <Route exact path='register' element={<Register />} />
        <Route exact path='login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
