import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProtectedRoute from './protectedRoutes/ProtectedRoute';
import PublicRoute from './protectedRoutes/PublicRoute';
import './App.css';
import { SetNavbar } from './components/navbar/SetNavbar';
import { Box } from '@mui/material'
// import { Dashboard } from './components/dashboard/Dashboard';
import { ApplyDoctor } from './components/user/apply-doctor/ApplyDoctor';
import { SetSidebar } from './components/sidebar/SetSidebar';
import { Doctors } from './components/admin/doctors/Doctors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Appointment } from './components/user/appointment/Appointment';
import { Profile } from './components/user/profile/Profile';
import { UserSettings } from './components/user/settings/UserSettings';
import { UserHome } from './components/user/home/UserHome';
import { AdminSettings } from './components/admin/settings/AdminSettings';
import { Users } from './components/admin/users/Users';
// import { AdminHome } from './components/admin/home/AdminHome';


function App() {
  const { user } = useSelector(state => state.user)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {

    if (location.pathname === "/") {
      navigate("/login")
    }
    else if (location.pathname === "/" && user?.existingUser?.isAdmin) {
      navigate("/admin")
    }
    else if (location.pathname === "/" && !user?.existingUser?.isAdmin) {
      navigate("/user")
    }
  }, [])

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
              <Route exact path='/user' element={<UserHome />} />
              <Route exact path='/user/appointment' element={<Appointment />} />
              <Route exact path='/user/applydoctor' element={<ApplyDoctor />} />
              <Route exact path='/user/profile' element={<Profile />} />
              <Route exact path='/user/settings' element={<UserSettings />} />

              <Route exact path='/admin' element={<UserHome />} />
              <Route exact path='/admin/settings' element={<AdminSettings />} />
              <Route exact path='/admin/doctors' element={<Doctors />} />
              <Route exact path='/admin/users' element={<Users />} />
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
