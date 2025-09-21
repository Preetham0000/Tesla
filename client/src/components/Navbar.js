

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav" style={{ boxShadow: '0 1px 0 0 #e0e0e0' }}>
      <div className="nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <div style={{ flex: '1 0 0', display: 'flex', alignItems: 'center' }}>
          <Link to="/" className="nav-logo" aria-label="Tesla Home" style={{ display: 'flex', alignItems: 'center', height: 32 }}>
            {/* Tesla logo image */}
            <img src="/tesla-logo.png" alt="Tesla" style={{ height: 34, width: 'auto', display: 'block' }} />
          </Link>
        </div>
        {/* Centered Main Links */}
        <div style={{ flex: '2 0 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32 }}>
          <Link to="/models" className="nav-link" style={{ fontWeight: 500 }}>Vehicles</Link>
          <a href="#" className="nav-link" style={{ fontWeight: 500 }}>Energy</a>
          <a href="#" className="nav-link" style={{ fontWeight: 500 }}>Charging</a>
          <a href="#" className="nav-link" style={{ fontWeight: 500 }}>Discover</a>
        </div>
        {/* Right Side Icons */}
        <div style={{ flex: '1 0 0', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 24 }}>
          {/* Language/Globe Icon */}
          <button className="bg-transparent border-none p-0 m-0" aria-label="Language" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg width="28" height="28" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            </svg>
          </button>
          {/* User Icon */}
          <button className="bg-transparent border-none p-0 m-0" aria-label="Account" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg width="28" height="28" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 8-4 8-4s8 0 8 4"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;