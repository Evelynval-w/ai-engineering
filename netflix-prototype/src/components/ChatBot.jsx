import { useState } from 'react'
import { useMovies } from '../context/MovieContext'

const HF_TOKEN = import.meta.env.VITE_HF_TOKEN

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm EvBot 🎬 Tell me your mood and I'll recommend a movie from EVFLIX!" }
  ])
  const [loading, setLoading] = useState(false)
  const { movies } = useMovies()

  const movieList = movies.map(m => `${m.title} (${m.genre}): ${m.desc}`).join('\n')

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMsg = { role: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const prompt = `You are EvBot, a movie recommender for EVFLIX streaming app.
The user says: "${input}"

Here are the available movies:
${movieList}

Based on the user's mood or request, recommend 2-3 movies from the list above.
Be conversational, friendly and brief. Mention the title and one sentence why it fits their mood.`

      const response = await fetch(
        'https://router.huggingface.co/novita/v3/openai/chat/completions',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HF_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'mistralai/Mistral-7B-Instruct-v0.3',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 300,
          })
        }
      )

      const data = await response.json()
      const botReply = data.choices?.[0]?.message?.content?.trim()
        || "Sorry, I couldn't think of a recommendation right now. Try again!"

      setMessages(prev => [...prev, { role: 'bot', text: botReply }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "Oops! Something went wrong. Try again!" }])
    }

    setLoading(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 200,
          backgroundColor: '#E50914', color: 'white',
          width: '56px', height: '56px', borderRadius: '50%',
          border: 'none', fontSize: '1.5rem', cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(229,9,20,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        {open ? '✕' : '🎬'}
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: '92px', right: '24px', zIndex: 200,
          backgroundColor: '#181818', borderRadius: '12px',
          width: '340px', height: '460px',
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 8px 40px rgba(0,0,0,0.8)',
          border: '1px solid #333',
        }}>
          <div style={{
            padding: '16px', borderBottom: '1px solid #333',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ fontSize: '1.4rem' }}>🎬</span>
            <div>
              <p style={{ color: 'white', fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>EvBot</p>
              <p style={{ color: '#46d369', margin: 0, fontSize: '0.75rem' }}>● AI Movie Recommender</p>
            </div>
          </div>

          <div style={{
            flex: 1, overflowY: 'auto', padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  backgroundColor: msg.role === 'user' ? '#E50914' : '#2a2a2a',
                  color: 'white', padding: '10px 14px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  maxWidth: '80%', fontSize: '0.85rem', lineHeight: 1.5,
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  backgroundColor: '#2a2a2a', color: '#aaa',
                  padding: '10px 14px', borderRadius: '16px 16px 16px 4px',
                  fontSize: '0.85rem',
                }}>
                  EvBot is thinking...
                </div>
              </div>
            )}
          </div>

          <div style={{
            padding: '12px', borderTop: '1px solid #333',
            display: 'flex', gap: '8px',
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="I'm feeling adventurous..."
              style={{
                flex: 1, backgroundColor: '#2a2a2a', border: '1px solid #444',
                borderRadius: '8px', padding: '8px 12px',
                color: 'white', fontSize: '0.85rem', outline: 'none',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              style={{
                backgroundColor: '#E50914', color: 'white',
                border: 'none', borderRadius: '8px',
                padding: '8px 14px', cursor: 'pointer',
                fontSize: '0.9rem', fontWeight: 700,
              }}
            >→</button>
          </div>
        </div>
      )}
    </>
  )
}