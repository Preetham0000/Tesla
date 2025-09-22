import React from 'react';
import HeroCarousel from '../components/HeroCarousel';

function HomePage() {
	return (
		<div className="homepage" style={{ background: '#fff' }}>
			<HeroCarousel />

			{/* Current Offers Section */}
			<div style={{ display: 'flex', gap: 32, margin: '40px 0 0 0', padding: '0 32px' }}>
				<div style={{ background: '#fafbfc', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 32, flex: 1 }}>
					<h2 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: 8 }}>Current Offers</h2>
					<div style={{ color: '#666', marginBottom: 16 }}>Limited inventory. Take delivery today.</div>
					<button style={{ background: '#3957ff', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 6, padding: '10px 24px', border: 'none' }}>Learn More</button>
				</div>
				<div style={{ background: '#fafbfc', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 32, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<img src="https://tesla-cdn.thron.com/static/R8N7B4_model-3-social" alt="Tesla Models" style={{ width: '100%', maxWidth: 220, borderRadius: 8, marginBottom: 12 }} />
					<h2 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: 8 }}>Annual Shareholder Meeting</h2>
					<div style={{ color: '#666', marginBottom: 16 }}>The future of Tesla is in your hands. Learn why your vote matters.</div>
					<button style={{ background: '#3957ff', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 6, padding: '10px 24px', border: 'none' }}>Learn More</button>
				</div>
			</div>

			{/* Charging Map Section */}
			<div style={{ margin: '56px 0 0 0', padding: '0 32px' }}>
				<div style={{ background: '#fafbfc', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 32 }}>
					<img src="https://www.tesla.com/sites/default/files/images/supercharger-map.png" alt="Supercharger Map" style={{ width: '100%', borderRadius: 8, marginBottom: 24 }} />
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
						<div>
							<h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: 8 }}>Find Your Charge</h2>
							<div style={{ color: '#666', marginBottom: 16 }}>View the network of Tesla Superchargers and Destination Chargers available near you.</div>
							<button style={{ background: '#222', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 6, padding: '10px 24px', border: 'none', marginRight: 12 }}>View Network</button>
							<button style={{ background: '#f5f5f5', color: '#222', fontWeight: 600, fontSize: 16, borderRadius: 6, padding: '10px 24px', border: 'none' }}>Learn More</button>
						</div>
						<div style={{ textAlign: 'right' }}>
							<div style={{ fontSize: 32, fontWeight: 700, color: '#d32f2f' }}>33,331 <span style={{ fontSize: 18, color: '#222' }}>Superchargers</span></div>
							<div style={{ fontSize: 32, fontWeight: 700, color: '#888' }}>10,402 <span style={{ fontSize: 18, color: '#222' }}>Destination Chargers</span></div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Section */}
			<footer style={{ background: '#fff', borderTop: '1px solid #eee', marginTop: 56, padding: '32px 0 0 0' }}>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, marginBottom: 16 }}>
					<span style={{ color: '#888', fontSize: 15 }}>Tesla © 2025</span>
					<span style={{ color: '#888', fontSize: 15 }}>Privacy & Legal</span>
					<span style={{ color: '#888', fontSize: 15 }}>Vehicle Recalls</span>
					<span style={{ color: '#888', fontSize: 15 }}>Contact</span>
					<span style={{ color: '#888', fontSize: 15 }}>News</span>
					<span style={{ color: '#888', fontSize: 15 }}>Get Updates</span>
					<span style={{ color: '#888', fontSize: 15 }}>Locations</span>
					<span style={{ color: '#888', fontSize: 15 }}>Learn</span>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginBottom: 24 }}>
					<button style={{ background: '#f5f5f5', color: '#222', fontWeight: 500, fontSize: 15, borderRadius: 6, padding: '10px 24px', border: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
						<span style={{ fontSize: 18 }}>💬</span> Ask a Question
					</button>
					<button style={{ background: '#f5f5f5', color: '#3957ff', fontWeight: 500, fontSize: 15, borderRadius: 6, padding: '10px 24px', border: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
						<span style={{ fontSize: 18 }}>🚗</span> Schedule a Drive Today
					</button>
				</div>
			</footer>
		</div>
	);
}

export default HomePage;


