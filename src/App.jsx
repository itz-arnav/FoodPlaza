import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from './context/AuthContext';
import Login from './views/Login';
import Home from './views/Home';
import "./styles/App.css";
import SignUp from './views/SignUp';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} /> */}
        <Route path="/login" element={ <Login />} />
        {/* <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} /> */}
        <Route path="/signup" element={ <Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
