import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (email.trim()) navigate("/browse");
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e3-f71e2571da8e/web/FR-fr-20250217-TRIFECTA-perspective_a7d8db15-dcf7-41bc-b6f9-b26d62800804_large.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4">
        <span style={{ color: '#E50914', fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>
          EVAFLIX
        </span>
        <button
          onClick={() => navigate("/browse")}
          style={{
            backgroundColor: '#E50914',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 600,
            padding: '7px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 900, marginBottom: '16px', maxWidth: '640px', lineHeight: 1.2 }}>
          Unlimited movies, TV shows and more
        </h1>
        <p style={{ color: 'white', fontSize: '1.25rem', marginBottom: '8px' }}>
          Watch anywhere. Cancel anytime.
        </p>
        <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '24px' }}>
          Ready to watch? Enter your email to get started.
        </p>

        {/* Email row */}
        <div style={{ display: 'flex', gap: '8px', width: '100%', maxWidth: '600px' }}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleStart()}
            style={{
              flex: 1,
              padding: '16px',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #aaa',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: 'white',
              outline: 'none',
            }}
          />
          <button
            onClick={handleStart}
            style={{
              backgroundColor: '#E50914',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 700,
              padding: '16px 24px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
}