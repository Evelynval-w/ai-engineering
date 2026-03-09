import { useMovies } from '../context/MovieContext'
import { useNavigate } from 'react-router-dom'

export default function Modal() {
  const { selectedMovie, closeModal } = useMovies()
  const navigate = useNavigate()

  if (!selectedMovie) return null

  const handlePlay = () => {
    closeModal()
    navigate(`/player/${selectedMovie.id}`)
  }

  return (
    <>
      <div onClick={closeModal} style={{
        position: 'fixed', inset: 0,
        backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 100,
      }} />

      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 101, backgroundColor: '#181818',
        borderRadius: '8px', width: '90%', maxWidth: '700px',
        overflow: 'hidden', boxShadow: '0 0 40px rgba(0,0,0,0.8)',
        maxHeight: '90vh', overflowY: 'auto',
      }}>
        {/* Banner */}
        <div style={{ position: 'relative' }}>
          <img
            src={selectedMovie.banner}
            alt={selectedMovie.title}
            style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px',
            background: 'linear-gradient(to top, #181818, transparent)',
          }} />

          {/* Close */}
          <button onClick={closeModal} style={{
            position: 'absolute', top: '12px', right: '12px',
            backgroundColor: '#181818', color: 'white',
            border: 'none', borderRadius: '50%',
            width: '36px', height: '36px', fontSize: '1rem',
            cursor: 'pointer',
          }}>✕</button>

          {/* Title + buttons */}
          <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 900, marginBottom: '12px' }}>
              {selectedMovie.title}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handlePlay} style={{
                backgroundColor: 'white', color: 'black',
                fontWeight: 700, padding: '8px 24px',
                borderRadius: '4px', border: 'none', cursor: 'pointer',
              }}>▶ Play</button>
              <button style={{
                backgroundColor: 'rgba(109,109,110,0.6)', color: 'white',
                fontWeight: 700, padding: '8px 24px',
                borderRadius: '4px', border: 'none', cursor: 'pointer',
              }}>+ My List</button>
            </div>
          </div>
        </div>

        {/* Details */}
        <div style={{ padding: '20px 24px 28px' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: '#46d369', fontWeight: 700, fontSize: '0.9rem' }}>{selectedMovie.maturityRating}</span>
            <span style={{ color: '#aaa', fontSize: '0.9rem' }}>{selectedMovie.duration}</span>
            <span style={{ color: '#aaa', fontSize: '0.9rem' }}>{selectedMovie.genre}</span>
          </div>
          <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {selectedMovie.desc}
          </p>
        </div>
      </div>
    </>
  )
}