import React, { useEffect, useState } from 'react';

const stars = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 97}%`,
  top: `${12 + ((index * 19) % 72)}%`,
  delay: `${(index % 7) * 0.65}s`,
  size: `${2 + (index % 3)}px`,
}));

export default function OpeningSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="opening-section" aria-labelledby="opening-title">
      <div className="opening-noise" aria-hidden="true" />
      <div className="opening-orbit opening-orbit-one" aria-hidden="true" />
      <div className="opening-orbit opening-orbit-two" aria-hidden="true" />
      <div className="star-field" aria-hidden="true">
        {stars.map((star) => (
          <span
            className="star"
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
      <div className="opening-content">
        <p className="opening-kicker reveal-up">
          <span>September birthday edition</span>
          <strong>A birthday tribute for the September queen</strong>
        </p>
        <h1 id="opening-title" className="opening-title reveal-up reveal-delay-one">
          <span>Happy birthday <em>Dhivyyy</em> <b className="shining-heart" aria-hidden="true">♥</b></span>
        </h1>
        <p className="opening-subtitle reveal-up reveal-delay-two">
          “Some people become memories. Some become family.
          <br />
          You became my favourite friend.”
        </p>
        <a className="primary-button reveal-up reveal-delay-three" href="#begin">
          <span className="button-icon" aria-hidden="true">→</span>
          ENTER THE MEMORY GALLERY
        </a>
      </div>
      <div className={`scroll-cue ${scrolled ? 'scroll-cue-hidden' : ''}`} aria-hidden="true">
        <span>scroll to wander</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
