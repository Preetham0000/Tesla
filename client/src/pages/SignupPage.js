import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    // Simulate signup
    setTimeout(() => {
      setError('');
      navigate('/');
    }, 1000);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className="notification error"><span id="notification-message">{error}</span></div>}
        <div className="form-group">
          <label className="form-label" htmlFor="signup-username">Username</label>
          <input id="signup-username" className="form-control" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="signup-email">Email</label>
          <input id="signup-email" className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="signup-password">Password</label>
          <input id="signup-password" className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="btn btn--primary btn--full-width" type="submit">Sign Up</button>
        <div className="auth-footer">
          <span>Already have an account? </span>
          <a href="/login" className="auth-link">Sign In</a>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
