import { createContext, useContext, useState } from 'react'
import movies from '../data/movies.json'

const MovieContext = createContext()

export function MovieProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const genres = [...new Set(movies.map(m => m.genre))]

  const getByGenre = (genre) => movies.filter(m => m.genre === genre)

  const openModal = (movie) => setSelectedMovie(movie)
  const closeModal = () => setSelectedMovie(null)

  return (
    <MovieContext.Provider value={{ movies, genres, getByGenre, selectedMovie, openModal, closeModal }}>
      {children}
    </MovieContext.Provider>
  )
}

export const useMovies = () => useContext(MovieContext)