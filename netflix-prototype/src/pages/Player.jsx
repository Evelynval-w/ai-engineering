import { useParams } from 'react-router-dom'

function Player() {
  const { id } = useParams()
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <h1 className="text-white text-4xl font-bold">Player Page ✅ — Movie ID: {id}</h1>
    </div>
  )
}

export default Player
