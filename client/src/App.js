import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {
  Login,
  Signup,
  Home,
  ManageTutors,
  ManageStudents,
  ManageServices,
  ManageVideos,
  ManagePosts,
  Notifications,
  AdminSettings,
  MTDetail,
  MSDetail,
  ServicesDetail,
  VideosDetai,
  Demo
} from "./pages/index";
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Navigate to={'/home'} />} />
        <Route path='/register' element={!user ? <Signup /> : <Navigate to={'/home'} />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to={'/'} />} />
        <Route path="/manageTutors" element={user ? <ManageTutors /> : <Navigate to={'/'} />} />
        <Route path="/manageTutors/:id" element={user ? <MTDetail /> : <Navigate to={'/'} />} />
        <Route path="/manageStudents" element={user ? <ManageStudents /> : <Navigate to={'/'} />} />
        <Route path="/manageStudents/:id" element={user ? <MSDetail /> : <Navigate to={'/'} />} />
        <Route path="/manageServices" element={user ? <ManageServices /> : <Navigate to={'/'} />} />
        <Route path="/manageSERVICES/:id" element={user ? <ServicesDetail /> : <Navigate to={'/'} />} />
        <Route path="/manageVideos" element={user ? <ManageVideos /> : <Navigate to={'/'} />} />
        <Route path="/manageVIDEOS/:id" element={user ? <VideosDetai /> : <Navigate to={'/'} />} />
        <Route path="/managePosts" element={user ? <ManagePosts /> : <Navigate to={'/'} />} />
        <Route path="/notifications" element={user ? <Notifications /> : <Navigate to={'/'} />} />
        <Route path="/adminSettings" element={user ? <AdminSettings /> : <Navigate to={'/'} />} />
        <Route path="/demo" element={<Demo />} />
       </Routes>
    </Router>
  );
}

export default App;
