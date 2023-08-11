import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProtectedRoute from './protectedRoutes/ProtectedRoute';
import PublicRoute from './protectedRoutes/PublicRoute';
import './App.css';
import { SetNavbar } from './components/navbar/SetNavbar';
import { Box } from '@mui/material'
import { Dashboard } from './components/dashboard/Dashboard';
import { ApplyDoctor } from './components/apply-doctor/ApplyDoctor';
import { SetSidebar } from './components/sidebar/SetSidebar';


function App() {
  return (
    <>
      <ToastContainer />
      <SetNavbar />

      <Box component="section" sx={{ height: "90vh", width: "100vw", display: "flex" }}>
        <Box component="article" sx={{ width: "330px" }} >
          <SetSidebar />
        </Box>
        <Box component="article" sx={{ width: "100%" }}>
          <Routes>
            <Route element={<ProtectedRoute />} >
              <Route exact path='/' element={<Dashboard />} />
              <Route exact path='/appointment' element={<Dashboard />} />
              <Route exact path='/applydoctor' element={<ApplyDoctor />} />
              <Route exact path='/profile' element={<Dashboard />} />
              <Route exact path='/settings' element={<Dashboard />} />
              <Route exact path='/doctors' element={<Dashboard />} />
              <Route exact path='/users' element={<Dashboard />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route exact path='register' element={<Register />} />
              <Route exact path='login' element={<Login />} />
            </Route>
          </Routes >
        </Box>
      </Box>
    </>
  );
}

export default App;
