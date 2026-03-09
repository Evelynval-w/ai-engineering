import { useState } from 'react'

export default function useModalToggle() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const openModal = (movie) => setSelectedMovie(movie)
  const closeModal = () => setSelectedMovie(null)
  return { selectedMovie, openModal, closeModal }
}