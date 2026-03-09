import { useMovies } from '../context/MovieContext'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import Modal from '../components/Modal'
import ChatBot from '../components/ChatBot'  // add at top




export default function Browse() {
  const { genres, getByGenre, selectedMovie } = useMovies()

  return (
    <div style={{ backgroundColor: '#141414', minHeight: '100vh' }}>
      <Navbar />
      <HeroBanner />
      <div style={{ paddingBottom: '40px' }}>
        {genres.map(genre => (
          <Row key={genre} title={genre} movies={getByGenre(genre)} />
        ))}
      </div>
      {selectedMovie && <Modal />}
      <ChatBot />
    </div>
  )
}

function HeroBanner() {
  const { movies, openModal } = useMovies()
  const hero = movies[0]
  if (!hero) return null

  return (
    <div style={{
      position: 'relative', height: '500px',
      backgroundImage: `url(${hero.banner})`,
      backgroundSize: 'cover', backgroundPosition: 'center top',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(20,20,20,0.9) 40%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(to top, #141414, transparent)',
      }} />
      <div style={{
        position: 'relative', zIndex: 10,
        padding: '0 48px', height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        maxWidth: '500px',
      }}>
        <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 900, marginBottom: '12px', lineHeight: 1.1 }}>
          {hero.title}
        </h1>
        <p style={{ color: '#ddd', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.5 }}>
          {hero.desc}
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => openModal(hero)} style={{
            backgroundColor: 'white', color: 'black',
            fontWeight: 700, fontSize: '1rem',
            padding: '10px 28px', borderRadius: '4px', border: 'none', cursor: 'pointer',
          }}>▶ Play</button>
          <button onClick={() => openModal(hero)} style={{
            backgroundColor: 'rgba(109,109,110,0.7)', color: 'white',
            fontWeight: 700, fontSize: '1rem',
            padding: '10px 28px', borderRadius: '4px', border: 'none', cursor: 'pointer',
          }}>ℹ More Info</button>
        </div>
      </div>
    </div>
  )
}