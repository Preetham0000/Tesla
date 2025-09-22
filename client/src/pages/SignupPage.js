import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const regions = ['United States', 'Canada', 'Europe', 'Asia', 'Australia'];
const languages = ['English', 'French', 'Spanish', 'German', 'Chinese'];

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isHuman, setIsHuman] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [teslaUpdates, setTeslaUpdates] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Step 1: Region, Language, Name, Captcha
  const handleStep1 = (e) => {
    e.preventDefault();
    if (!region || !language || !firstName || !lastName || !isHuman) {
      setError('Please fill in all fields and confirm you are human');
      return;
    }
    setError('');
    setStep(2);
  };

  // Step 2: Email, Password, Confirm Password, Tesla Updates
  const handleStep2 = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Save to backend
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: firstName + lastName,
          email,
          password,
          region,
          language,
          teslaUpdates
        })
      });
      const data = await res.json();
      if (res.ok) {
        navigate('/login');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div className="signup-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff' }}>
      <div style={{ maxWidth: 350, width: '100%', margin: '0 auto' }}>
        <div style={{ fontSize: 15, color: '#888', marginBottom: 8 }}>Step {step} of 2</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: 24 }}>Create Account</h2>
        {step === 1 && (
          <form onSubmit={handleStep1} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <label htmlFor="region" style={{ fontWeight: 500, fontSize: 15, marginBottom: 6, display: 'block' }}>Region</label>
              <select id="region" value={region} onChange={e => setRegion(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: 15, borderRadius: 6, border: '1px solid #eee', background: '#fafafa' }}>
                <option value="">Select Region</option>
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="language" style={{ fontWeight: 500, fontSize: 15, marginBottom: 6, display: 'block' }}>Language</label>
              <select id="language" value={language} onChange={e => setLanguage(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: 15, borderRadius: 6, border: '1px solid #eee', background: '#fafafa' }}>
                <option value="">Select Language</option>
                {languages.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="firstName" style={{ fontWeight: 500, fontSize: 15, marginBottom: 6, display: 'block' }}>First Name</label>
              <input id="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: 15, borderRadius: 6, border: '1px solid #eee', background: '#fafafa' }} />
            </div>
            <div>
              <label htmlFor="lastName" style={{ fontWeight: 500, fontSize: 15, marginBottom: 6, display: 'block' }}>Last Name</label>
              <input id="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: 15, borderRadius: 6, border: '1px solid #eee', background: '#fafafa' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '10px 0' }}>
              <input id="human" type="checkbox" checked={isHuman} onChange={e => setIsHuman(e.target.checked)} style={{ width: 22, height: 22 }} />
              <label htmlFor="human" style={{ fontSize: 15 }}>I am human</label>
              <img src="https://www.hcaptcha.com/images/logo.svg" alt="hCaptcha" style={{ height: 32, marginLeft: 8 }} />
            </div>
            {error && <div style={{ color: '#d32f2f', fontSize: 14 }}>{error}</div>}
            <button type="submit" style={{ width: '100%', background: '#3957ff', color: '#fff', fontWeight: 600, fontSize: 18, borderRadius: 6, padding: '14px 0', border: 'none', marginTop: 8 }}>Next</button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleStep2} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <label htmlFor="email" style={{ fontWeight: 500, fontSize: 15, marginBottom: 6, display: 'block' }}>Email</label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: 15, borderRadius: 6, border: '1px solid #eee', background: '#fafafa' }} />
            </div>
            <div>
              <label htmlFor="password" style={{ fontWeight: 500, fontSize: 15, marginBottom: 6, display: 'block' }}>Password <span title="Minimum 6 characters" style={{ cursor: 'help', fontSize: 14 }}>ⓘ</span></label>
              <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: 15, borderRadius: 6, border: '1px solid #eee', background: '#fafafa' }} />
            </div>
            <div>
              <label htmlFor="confirmPassword" style={{ fontWeight: 500, fontSize: 15, marginBottom: 6, display: 'block' }}>Confirm Password</label>
              <input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: 15, borderRadius: 6, border: '1px solid #eee', background: '#fafafa' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <input id="teslaUpdates" type="checkbox" checked={teslaUpdates} onChange={e => setTeslaUpdates(e.target.checked)} />
              <label htmlFor="teslaUpdates" style={{ fontSize: 15 }}>Get Tesla Updates [Optional]</label>
            </div>
            <div style={{ fontSize: 13, color: '#888', margin: '8px 0' }}>
              Learn about <a href="#" style={{ color: '#3957ff' }}>Tesla Updates</a>
            </div>
            {error && <div style={{ color: '#d32f2f', fontSize: 14 }}>{error}</div>}
            <button type="submit" style={{ width: '100%', background: '#3957ff', color: '#fff', fontWeight: 600, fontSize: 18, borderRadius: 6, padding: '14px 0', border: 'none', marginTop: 8 }}>Next</button>
          </form>
        )}
        <div style={{ fontSize: 13, color: '#888', margin: '18px 0' }}>
          By clicking 'Next', I understand and agree to Tesla's{' '}
          <a href="#" style={{ color: '#3957ff' }}>Privacy Notice</a> and{' '}
          <a href="#" style={{ color: '#3957ff' }}>Terms of Use</a> for creating a Tesla Account and I authorize Tesla to contact me for account management purposes via the contact information I provide. I understand calls or texts may use automatic or computer-assisted dialing or pre-recorded messages. Normal message and data rates apply.
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
