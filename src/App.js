import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { Login, Home, ManageTutors } from './pages/index'
import MTDetail from './pages/ManageTutors/MTDetail';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="/logout" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/manageTutors" element={<ManageTutors />} />
      
      <Route path="/manageTutors/:id" element={<MTDetail />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
