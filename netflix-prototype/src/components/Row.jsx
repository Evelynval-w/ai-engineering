import { useState } from 'react'
import Tile from './Tile'
import Skeleton from './Skeleton'

export default function Row({ title, movies }) {
  const [loaded, setLoaded] = useState({})

  const handleLoad = (id) => setLoaded(prev => ({ ...prev, [id]: true }))

  return (
    <div style={{ padding: '0 48px', marginBottom: '32px' }}>
      <h2 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ flex: '0 0 auto', width: '180px' }}>
            {!loaded[movie.id] && <Skeleton />}
            <div style={{ display: loaded[movie.id] ? 'block' : 'none' }}>
              <Tile movie={movie} onLoad={() => handleLoad(movie.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}