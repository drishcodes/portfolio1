import { useState, useEffect } from "react";

// ─── Paste your image path/URL here ───────────────────────────────────────────
const PHOTO_SRC = "/your-photo.jpg"; // ← replace with your actual image path
// ──────────────────────────────────────────────────────────────────────────────

export default function ProfilePhoto() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`profile-wrapper ${loaded ? "visible" : ""}`}>
      {/* Outer glow ring — matches the teal/purple gradient border in the screenshot */}
      <div className="ring ring-outer" />
      <div className="ring ring-inner" />

      {/* Rotating dashed orbit */}
      <div className="orbit" />

      {/* Photo frame */}
      <div className="photo-frame">
        <img
          src={PHOTO_SRC}
          alt="Drishti Chauhan"
          className="photo"
          onError={(e) => {
            // Fallback: show initials if image fails to load
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Initials fallback */}
        <div className="initials" style={{ display: "none" }}>DC</div>

        {/* Subtle inner overlay for depth */}
        <div className="photo-overlay" />
      </div>

      {/* Status dot */}
      <div className="status-dot">
        <span className="dot-pulse" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap');

        .profile-wrapper {
          position: relative;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.88) translateY(16px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .profile-wrapper.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* ── Rings ── */
        .ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .ring-outer {
          inset: -6px;
          background: conic-gradient(
            from 180deg,
            #6ee7f7,
            #a78bfa,
            #f472b6,
            #6ee7f7
          );
          animation: spin 6s linear infinite;
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 3px),
            #000 calc(100% - 2px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 3px),
            #000 calc(100% - 2px)
          );
        }

        .ring-inner {
          inset: 4px;
          background: conic-gradient(
            from 0deg,
            rgba(110,231,247,0.25),
            rgba(167,139,250,0.25),
            rgba(110,231,247,0.25)
          );
          animation: spin 10s linear infinite reverse;
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            #000 calc(100% - 1px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            #000 calc(100% - 1px)
          );
        }

        /* ── Orbit ── */
        .orbit {
          position: absolute;
          inset: -18px;
          border-radius: 50%;
          border: 1px dashed rgba(110, 231, 247, 0.18);
          animation: spin 18s linear infinite;
        }

        /* ── Photo frame ── */
        .photo-frame {
          position: relative;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          overflow: hidden;
          background: #0d1b2a;
          box-shadow:
            0 0 0 2px rgba(110, 231, 247, 0.15),
            0 8px 40px rgba(0, 0, 0, 0.6),
            inset 0 0 20px rgba(0, 0, 0, 0.4);
        }

        .photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.5s ease;
          filter: brightness(0.95) saturate(1.05);
        }

        .photo-frame:hover .photo {
          transform: scale(1.04);
        }

        .photo-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 70% 10%,
            rgba(110, 231, 247, 0.08),
            transparent 60%
          );
          pointer-events: none;
        }

        /* ── Initials fallback ── */
        .initials {
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6ee7f7, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ── Status dot ── */
        .status-dot {
          position: absolute;
          bottom: 14px;
          right: 14px;
          width: 18px;
          height: 18px;
          background: #10b981;
          border-radius: 50%;
          border: 3px solid #0a1628;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .dot-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s ease-out infinite;
        }

        /* ── Keyframes ── */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
