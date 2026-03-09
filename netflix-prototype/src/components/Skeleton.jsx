export default function Skeleton() {
  return (
    <div style={{
      flex: '0 0 auto', width: '180px', height: '270px',
      borderRadius: '4px', backgroundColor: '#2a2a2a',
      animation: 'pulse 1.5s ease-in-out infinite',
    }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}