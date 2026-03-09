import Tile from './Tile'

export default function Row({ title, movies }) {
  return (
    <div style={{ padding: '0 48px', marginBottom: '32px' }}>
      <h2 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
        {movies.map(movie => (
          <Tile key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}