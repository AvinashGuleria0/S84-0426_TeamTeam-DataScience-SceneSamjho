import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import AdminPortal from './pages/AdminPortal';
import { AnalyticsDashboard } from './features/analytics';
import Legal from './pages/Legal';
import Login from './pages/Login';
import Signup from './pages/Signup';

const ProtectedRoute = () => {
  const token = localStorage.getItem('sceneAppToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/admin" replace />} />
              <Route path="admin" element={<AdminPortal />} />
              <Route path="analytics" element={<AnalyticsDashboard />} />
              <Route path="privacy" element={<Legal title="Privacy Policy" />} />
              <Route path="terms" element={<Legal title="Terms of Service" />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
