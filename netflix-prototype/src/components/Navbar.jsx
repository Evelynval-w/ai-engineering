import { useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/browse' },
  { label: 'TV Shows', path: '/browse' },
  { label: 'Movies', path: '/browse' },
  { label: 'New & Popular', path: '/browse' },
]

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: '68px',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <span
          onClick={() => navigate('/browse')}
          style={{ color: '#E50914', fontSize: '1.8rem', fontWeight: 900, cursor: 'pointer', letterSpacing: '-1px' }}
        >
          EVFLIX
        </span>
        {navLinks.map(item => (
          <span
            key={item.label}
            onClick={() => navigate(item.path)}
            style={{ color: 'white', fontSize: '0.9rem', cursor: 'pointer', opacity: 0.85 }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.85}
          >
            {item.label}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>🔍</span>
        <div
          onClick={() => navigate('/browse')}
          style={{
            backgroundColor: '#E50914', color: 'white',
            width: '32px', height: '32px', borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer'
          }}
        >E</div>
      </div>
    </nav>
  )
}