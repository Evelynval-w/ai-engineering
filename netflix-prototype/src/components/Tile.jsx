import { useMovies } from '../context/MovieContext'

export default function Tile({ movie, onLoad }) {
  const { openModal } = useMovies()

  return (
    <div
      onClick={() => openModal(movie)}
      style={{
        width: '180px', borderRadius: '4px', overflow: 'hidden',
        cursor: 'pointer', transition: 'transform 0.2s', position: 'relative',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src={movie.img}
        alt={movie.title}
        loading="lazy"
        onLoad={onLoad}
        style={{ width: '100%', height: '270px', objectFit: 'cover', display: 'block' }}
        onError={e => { onLoad(); e.target.style.backgroundColor = '#333' }}
      />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        padding: '20px 8px 8px',
      }}>
        <p style={{ color: 'white', fontSize: '0.75rem', fontWeight: 600, margin: 0 }}>{movie.title}</p>
      </div>
    </div>
  )
}