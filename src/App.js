import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import {
  Login,
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
} from "./pages/index";
// import MTDetail from "./pages/ManageTutors/MTDetail";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="/logout" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/manageTutors" element={<ManageTutors />} />
      <Route path="/manageTUTORS/:id" element={<MTDetail />} />
      <Route path="/manageStudents" element={<ManageStudents />} />
      <Route path="/manageSTUDENTS/:id" element={<MSDetail />} />
      <Route path="/manageServices" element={<ManageServices />} />
      <Route path="/manageVideos" element={<ManageVideos />} />
      <Route path="/managePosts" element={<ManagePosts />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/adminSettings" element={<AdminSettings />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
