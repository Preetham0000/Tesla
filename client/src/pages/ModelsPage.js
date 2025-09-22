import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teslaModels } from '../data/teslaModels';

const allModels = [
  'Model S',
  'Model 3',
  'Model X',
  'Model Y',
  'Cybertruck'
];

const demoInventory = [
  {
    name: 'Cybertruck',
  imageUrl: '/all-wheel.png',
    price: 74430,
    lease: 664,
    miles: 5762,
    range: 325,
    reduced: 5560,
    preOwned: false,
    trim: 'All-Wheel Drive',
    wheels: 'Core Wheels',
    interior: 'Black',
    autopilot: true
  },
  {
    name: 'Cybertruck',
  imageUrl: '/all-wheel.png',
    price: 75130,
    lease: 663,
    miles: 4211,
    range: 325,
    reduced: 4860,
    preOwned: false,
    trim: 'All-Wheel Drive',
    wheels: 'Core Wheels',
    interior: 'Black',
    autopilot: true
  },
  {
    name: 'Cybertruck',
  imageUrl: '/cybertruck.png',
    price: 79999,
    lease: 700,
    miles: 1000,
    range: 340,
    reduced: 3000,
    preOwned: false,
    trim: 'Cyberbeast',
    wheels: 'Cyber Wheels',
    interior: 'White',
    autopilot: false
  },
  {
    name: 'Cybertruck',
  imageUrl: '/cybertruck.png',
    price: 85000,
    lease: 800,
    miles: 500,
    range: 350,
    reduced: 2000,
    preOwned: false,
    trim: 'Cyberbeast Foundation Series',
    wheels: 'Cyber Wheels',
    interior: 'Black',
    autopilot: true
  },
  {
    name: 'Model 3',
  imageUrl: '/all-wheel.png',
    price: 42070,
    lease: 341,
    miles: 58,
    range: 357,
    reduced: 420,
    preOwned: false,
    trim: 'All-Wheel Drive',
    wheels: 'Sport Wheels',
    interior: 'Black',
    autopilot: true
  }
];

function ModelsPage() {
  const [tab, setTab] = useState('New');
  const [selectedModel, setSelectedModel] = useState('Cybertruck');
  const [payment, setPayment] = useState('Lease');
  const [leaseRange, setLeaseRange] = useState([600, 1600]);
  const [selectedTrims, setSelectedTrims] = useState([]);
  const [selectedWheels, setSelectedWheels] = useState([]);
  const [selectedInterior, setSelectedInterior] = useState('');
  const [autopilot, setAutopilot] = useState(false);

  return (
    <div className="models-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 600, margin: '32px 0 24px 0', textAlign: 'center' }}>Tesla Inventory</h2>
      <div style={{ display: 'flex', gap: 32, padding: '0 32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Sidebar */}
        <aside style={{ width: 320, padding: '48px 32px 0 48px', background: '#fff', borderRight: '1px solid #eee' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 8 }}>Inventory</h1>
          <Link to="#" style={{ color: '#3957ff', fontWeight: 500, fontSize: 17, marginBottom: 32, display: 'inline-block' }}>Enter zip code</Link>
          <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
            <button onClick={() => setTab('New')} style={{ flex: 1, background: tab === 'New' ? '#f5f5f5' : '#fff', border: 'none', fontWeight: 600, fontSize: 17, padding: '12px 0', borderRadius: 6, boxShadow: tab === 'New' ? '0 2px 8px rgba(0,0,0,0.04)' : 'none', cursor: 'pointer' }}>New</button>
            <button onClick={() => setTab('Pre-Owned')} style={{ flex: 1, background: tab === 'Pre-Owned' ? '#f5f5f5' : '#fff', border: 'none', fontWeight: 600, fontSize: 17, padding: '12px 0', borderRadius: 6, boxShadow: tab === 'Pre-Owned' ? '0 2px 8px rgba(0,0,0,0.04)' : 'none', cursor: 'pointer' }}>Pre-Owned</button>
          </div>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Model</div>
            {allModels.map(model => (
              <div key={model} style={{ marginBottom: 8 }}>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: 17, fontWeight: model === selectedModel ? 600 : 400, cursor: 'pointer' }}>
                  <input type="radio" name="model" checked={selectedModel === model} onChange={() => setSelectedModel(model)} style={{ marginRight: 10 }} />
                  {model}
                </label>
              </div>
            ))}
          </div>
          {/* Payment Section */}
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Payment</div>
          <div style={{ marginBottom: 24 }}>
            {['Cash', 'Lease', 'Finance'].map(opt => (
              <label key={opt} style={{ display: 'flex', alignItems: 'center', fontSize: 16, fontWeight: payment === opt ? 600 : 400, marginBottom: 8 }}>
                <input type="radio" name="payment" checked={payment === opt} onChange={() => setPayment(opt)} style={{ marginRight: 10 }} />
                {opt}
              </label>
            ))}
            {/* Lease range slider mockup */}
            {payment === 'Lease' && (
              <div style={{ marginTop: 12 }}>
                <input type="range" min={600} max={1600} value={leaseRange[0]} onChange={e => setLeaseRange([Number(e.target.value), leaseRange[1]])} style={{ width: '100%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, marginTop: 4 }}>
                  <span>${leaseRange[0]}</span>
                  <span>${leaseRange[1]}</span>
                </div>
              </div>
            )}
          </div>
          {/* Trim Section */}
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Trim</div>
          <div style={{ marginBottom: 24 }}>
            {['Long Range Rear-Wheel Drive', 'Cyberbeast Foundation Series', 'All-Wheel Drive', 'Cyberbeast'].map(trim => (
              <label key={trim} style={{ display: 'flex', alignItems: 'center', fontSize: 16, marginBottom: 8 }}>
                <input type="checkbox" checked={selectedTrims.includes(trim)} onChange={e => {
                  setSelectedTrims(e.target.checked ? [...selectedTrims, trim] : selectedTrims.filter(t => t !== trim));
                }} style={{ marginRight: 10 }} />
                {trim}
              </label>
            ))}
          </div>
          {/* Wheels Section */}
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Wheels</div>
          <div style={{ marginBottom: 24 }}>
            {['Core Wheels', 'Cyber Wheels'].map(wheel => (
              <label key={wheel} style={{ display: 'flex', alignItems: 'center', fontSize: 16, marginBottom: 8 }}>
                <input type="checkbox" checked={selectedWheels.includes(wheel)} onChange={e => {
                  setSelectedWheels(e.target.checked ? [...selectedWheels, wheel] : selectedWheels.filter(w => w !== wheel));
                }} style={{ marginRight: 10 }} />
                {wheel}
              </label>
            ))}
          </div>
          {/* Interior Section */}
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Interior</div>
          <div style={{ marginBottom: 24, display: 'flex', gap: 16 }}>
            {['White', 'Black'].map(color => (
              <div key={color} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input type="radio" name="interior" checked={selectedInterior === color} onChange={() => setSelectedInterior(color)} />
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: color === 'White' ? '#fff' : '#222', border: '1px solid #bbb', display: 'inline-block' }}></span>
              </div>
            ))}
          </div>
          {/* Autopilot Section */}
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Autopilot</div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
              <input type="checkbox" checked={autopilot} onChange={e => setAutopilot(e.target.checked)} style={{ marginRight: 10 }} />
              Full Self Driving
            </label>
          </div>
        </aside>
        {/* Main inventory grid */}
        <main style={{ flex: 1, padding: '48px 32px 0 32px', background: '#fafafa' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {demoInventory.filter(car => car.name === selectedModel && (tab === 'New' ? !car.preOwned : car.preOwned)).map((car, idx) => (
              <div key={idx} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', overflow: 'hidden', position: 'relative', minHeight: 420 }}>
                <div style={{ position: 'absolute', top: 18, left: 18, background: '#f5f5f5', color: '#444', fontWeight: 600, fontSize: 16, borderRadius: 8, padding: '6px 18px', zIndex: 2 }}>Reduced by ${car.reduced}</div>
                <img src={car.imageUrl} alt={car.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                <div style={{ padding: '32px 24px 24px 24px' }}>
                  <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>{car.trim || 'All-Wheel Drive'}</div>
                  <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>Est. ${car.lease}/mo lease • ${car.price.toLocaleString()}</div>
                  <div style={{ fontSize: 16, color: '#444', marginBottom: 8 }}>Demo Vehicle with {car.miles.toLocaleString()} mi</div>
                  <div style={{ fontSize: 16, color: '#444', marginBottom: 8 }}>{car.range} mi Range (est.)</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8, fontSize: 16 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ width: 16, height: 16, background: '#222', borderRadius: 4, display: 'inline-block' }}></span> Interior
                    </span>
                    <span>20" {car.wheels}</span>
                    <span role="img" aria-label="Tow">🚚 Tow</span>
                  </div>
                  <div style={{ fontSize: 15, color: '#444', marginBottom: 8 }}>
                    <span role="img" aria-label="Supercharging">⚡</span> 1 yr Supercharging
                  </div>
                  <Link to={`/customize/${car.name.toLowerCase().replace(/ /g, '-')}`} style={{ display: 'inline-block', background: '#3957ff', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 6, padding: '12px 32px', border: 'none', textDecoration: 'none', marginTop: 18 }}>Customize</Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
// ...existing code...

export default ModelsPage;
