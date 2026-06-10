import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: '4rem 0 2rem', marginTop: 'auto' }}>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>DENVER Clinic</h3>
          <p style={{ opacity: 0.8, maxWidth: '300px' }}>
            Experience an incredible transformation through our non-invasive procedures with remarkable before-and-after results.
          </p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Treatments</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8 }}>
            <Link to="/cellulite" style={{ transition: 'opacity 0.2s' }}>Cellulite Reduction</Link>
            <Link to="/body-contouring" style={{ transition: 'opacity 0.2s' }}>Body Contouring</Link>
            <Link to="/face-lift" style={{ transition: 'opacity 0.2s' }}>Non-Surgical Face Lift</Link>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8 }}>
            <p>6 Ibn Elnabeh, Zamalek, Cairo, Egypt</p>
            <p>Tel: +2 01099355211</p>
            <p>Email: dnvrclinic@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Denver Aesthetic Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};
