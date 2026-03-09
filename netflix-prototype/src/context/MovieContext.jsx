import { createContext, useContext } from 'react'
import useModalToggle from '../hooks/useModalToggle'
import movies from '../data/movies.json'

const MovieContext = createContext()

export function MovieProvider({ children }) {
  const { selectedMovie, openModal, closeModal } = useModalToggle()
  const genres = [...new Set(movies.map(m => m.genre))]
  const getByGenre = (genre) => movies.filter(m => m.genre === genre)

  return (
    <MovieContext.Provider value={{ movies, genres, getByGenre, selectedMovie, openModal, closeModal }}>
      {children}
    </MovieContext.Provider>
  )
}

export const useMovies = () => useContext(MovieContext)