import { useParams, useNavigate } from 'react-router-dom'
import { useMovies } from '../context/MovieContext'

export default function Player() {
  const { id } = useParams()
  const { movies } = useMovies()
  const navigate = useNavigate()

  const movie = movies.find(m => m.id === parseInt(id))

  if (!movie) {
    return (
      <div style={{ backgroundColor: '#141414', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'white' }}>Movie not found.</p>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: '16px 24px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
      }}>
        <button
          onClick={() => navigate('/browse')}
          style={{
            backgroundColor: 'transparent', border: 'none',
            color: 'white', fontSize: '1.5rem', cursor: 'pointer',
          }}
        >←</button>
        <span style={{ color: '#E50914', fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-1px' }}>
          EVFLIX
        </span>
        <span style={{ color: '#aaa', fontSize: '0.9rem' }}>
          Playing: <span style={{ color: 'white', fontWeight: 600 }}>{movie.title}</span>
        </span>
      </div>

      {/* Video player */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px 40px' }}>
        <div style={{ width: '100%', maxWidth: '960px' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              src={`${movie.videoURL}?autoplay=1&rel=0`}
              title={movie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%', border: 'none',
              }}
            />
          </div>

          {/* Movie info below player */}
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 900, marginBottom: '8px' }}>
                {movie.title}
              </h1>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                <span style={{ color: '#46d369', fontWeight: 700, fontSize: '0.85rem' }}>{movie.maturityRating}</span>
                <span style={{ color: '#aaa', fontSize: '0.85rem' }}>{movie.duration}</span>
                <span style={{ color: '#aaa', fontSize: '0.85rem' }}>{movie.genre}</span>
              </div>
              <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '680px' }}>
                {movie.desc}
              </p>
            </div>
            <button
              onClick={() => navigate('/browse')}
              style={{
                backgroundColor: 'rgba(109,109,110,0.6)', color: 'white',
                border: 'none', borderRadius: '4px',
                padding: '8px 20px', cursor: 'pointer',
                fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap',
              }}
            >
              ← Back to Browse
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}