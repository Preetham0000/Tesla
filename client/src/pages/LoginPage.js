import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Step 1: Enter email
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    setError('');
    setStep(2);
  };

  // Step 2: Enter password
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setError('Please enter your password');
      return;
    }
    setError('');
    // Simulate login
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        // Save JWT token to localStorage
        localStorage.setItem('tesla_token', data.token);
        navigate('/account');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div className="login-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff' }}>
      <div style={{ maxWidth: 400, width: '100%', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: 32, textAlign: 'center' }}>Sign In</h2>
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <label htmlFor="login-email" style={{ fontWeight: 500, fontSize: 16, marginBottom: 8, display: 'block' }}>Email <span title="We use your email for account login." style={{ cursor: 'help', fontSize: 14 }}>ⓘ</span></label>
              <input id="login-email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', fontSize: 16, borderRadius: 6, border: '1px solid #eee', background: '#fafafa', marginBottom: 8 }} />
              {error && <div style={{ color: '#d32f2f', fontSize: 14 }}>{error}</div>}
            </div>
            <button type="submit" style={{ width: '100%', background: '#3957ff', color: '#fff', fontWeight: 600, fontSize: 18, borderRadius: 6, padding: '14px 0', border: 'none', marginBottom: 8 }}>Next</button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handlePasswordSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 18 }}>{email}</span>
              <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#3957ff', textDecoration: 'underline', fontSize: 15, cursor: 'pointer' }}>Change</button>
            </div>
            <div>
              <label htmlFor="login-password" style={{ fontWeight: 500, fontSize: 16, marginBottom: 8, display: 'block' }}>Password</label>
              <input id="login-password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', fontSize: 16, borderRadius: 6, border: '1px solid #eee', background: '#fafafa', marginBottom: 8 }} />
              {error && <div style={{ color: '#d32f2f', fontSize: 14 }}>{error}</div>}
            </div>
            <button type="submit" style={{ width: '100%', background: '#3957ff', color: '#fff', fontWeight: 600, fontSize: 18, borderRadius: 6, padding: '14px 0', border: 'none', marginBottom: 8 }}>Sign In</button>
          </form>
        )}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <Link to="#" style={{ color: '#222', textDecoration: 'underline', fontSize: 15 }}>Forgot password?</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', margin: '24px 0' }}>
          <div style={{ flex: 1, height: 1, background: '#eee' }}></div>
          <span style={{ margin: '0 16px', color: '#888', fontWeight: 500 }}>Or</span>
          <div style={{ flex: 1, height: 1, background: '#eee' }}></div>
        </div>
        <button onClick={() => navigate('/signup')} style={{ width: '100%', background: '#f5f5f5', color: '#222', fontWeight: 600, fontSize: 18, borderRadius: 6, padding: '14px 0', border: 'none' }}>Create Account</button>
      </div>
    </div>
  );
};

export default LoginPage;
