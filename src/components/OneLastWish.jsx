import React, { useState } from "react";

export default function OneLastWish() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="last-wish-section" aria-labelledby="last-wish-title">
      <div className="last-wish-stars" aria-hidden="true">✦　·　✧　·　✦</div>
      <p className="eyebrow">One last wish</p>
      <h2 id="last-wish-title">For <em>Dhivya</em>, always.</h2>
      <p className="last-wish-intro">
        A little surprise, saved for the very end.
      </p>

      {!isOpen ? (
        <button
          className="dhivya-letter-card"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Dhivya's birthday video"
        >
          <span className="letter-card-hint">click to open</span>
          <span className="dhivya-letters" aria-hidden="true">
            {"DHIVYA".split("").map((letter, index) => (
              <span key={`${letter}-${index}`}>{letter}</span>
            ))}
          </span>
          <strong>Happy birthday, Bubu ♡</strong>
          <span className="letter-card-seal">✦</span>
        </button>
      ) : (
        <div className="wish-video-card">
          <button
            className="wish-video-close"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close birthday video"
          >
            ×
          </button>
          <video
            className="wish-video"
            src="/memories/video.mp4"
            autoPlay
            muted
            controls
            playsInline
            preload="auto"
          />
          <p className="wish-video-caption">A little birthday memory for you.</p>
        </div>
      )}
    </section>
  );
}
