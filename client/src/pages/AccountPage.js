
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { icon: '🏠', label: 'My Products' },
  { icon: '👤', label: 'Account Settings' },
  { icon: '💳', label: 'Payment Method' },
  { icon: '✈️', label: 'Refer and Earn' },
  { icon: '🛒', label: 'Order History' },
  { icon: '🚪', label: 'Sign Out', action: 'logout' }
];

const productCards = [
  {
    img: 'https://www.tesla.com/sites/default/files/solarpanels/solar-panel-roof.jpg',
    title: 'Order Tesla Solar',
    desc: 'Produce energy to power your Tesla life',
    link: '#',
    linkText: 'View Solar'
  },
  {
    img: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s.jpg',
    title: 'Reserve a Car',
    desc: 'Browse our models',
    link: '/models',
    linkText: 'Order'
  },
  {
    img: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-3.jpg',
    title: 'Purchased a car from a third party?',
    desc: '',
    link: '#',
    linkText: 'Add',
    faded: true
  }
];

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [activeSidebar, setActiveSidebar] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('tesla_token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(async res => {
        const data = await res.json();
        if (res.ok && data && data.email) {
          setUser(data);
        } else {
          setError(data.message || 'Failed to load account info');
        }
      })
      .catch(() => setError('Server error'));
  }, [navigate]);

  const handleSidebarClick = (idx, item) => {
    setActiveSidebar(idx);
    if (item.action === 'logout') {
      localStorage.removeItem('tesla_token');
      navigate('/login');
    }
  };

  if (error) {
    return <div style={{ padding: 40, textAlign: 'center', color: '#d32f2f' }}>{error}</div>;
  }
  if (!user) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', minHeight: '80vh', background: '#fff' }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: '#fafbfc', borderRight: '1px solid #eee', padding: '32px 0' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {sidebarItems.map((item, idx) => (
            <li key={item.label} onClick={() => handleSidebarClick(idx, item)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer',
                  padding: '14px 32px', fontWeight: activeSidebar === idx ? 600 : 500,
                  background: activeSidebar === idx ? '#fff' : 'none',
                  color: activeSidebar === idx ? '#3957ff' : '#222',
                  borderLeft: activeSidebar === idx ? '3px solid #3957ff' : '3px solid transparent'
                }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span style={{ fontSize: 16 }}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div style={{ flex: 1, padding: '48px 40px' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 600, marginBottom: 32 }}>My Products</h2>
        <div style={{ display: 'flex', gap: 32 }}>
          {productCards.map((card, idx) => (
            <div key={idx} style={{
              width: 320,
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: 10,
              boxShadow: '0 2px 8px #eee',
              opacity: card.faded ? 0.5 : 1,
              overflow: 'hidden',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>
              <img src={card.img} alt={card.title} style={{ width: '100%', height: 120, objectFit: 'cover', background: '#f5f5f5' }} />
              <div style={{ padding: '18px 20px' }}>
                <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>{card.title}</div>
                {card.desc && <div style={{ color: '#666', fontSize: 15, marginBottom: 12 }}>{card.desc}</div>}
                <a href={card.link} style={{ color: '#3957ff', fontWeight: 500, fontSize: 15, textDecoration: 'underline', cursor: 'pointer' }}>{card.linkText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
