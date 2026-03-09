import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import Landing from './pages/Landing'
import Browse from './pages/Browse'
import Player from './pages/Player'

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  )
}

export default App