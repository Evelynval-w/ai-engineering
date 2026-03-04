

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Browse from './pages/Browse'
import Player from './pages/Player'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App