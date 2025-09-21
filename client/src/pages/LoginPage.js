import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Simulate login
    setTimeout(() => {
      setError('');
      navigate('/');
    }, 1000);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        {error && <div className="notification error"><span id="notification-message">{error}</span></div>}
        <div className="form-group">
          <label className="form-label" htmlFor="login-email">Email</label>
          <input id="login-email" className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="login-password">Password</label>
          <input id="login-password" className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="btn btn--primary btn--full-width" type="submit">Sign In</button>
        <div className="auth-footer">
          <span>Don't have an account? </span>
          <a href="/signup" className="auth-link">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
