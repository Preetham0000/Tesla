import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ModelsPage from './pages/ModelsPage';
import CustomizePage from './pages/CustomizePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/customize/:modelName" element={<CustomizePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;