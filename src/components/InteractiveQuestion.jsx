import React, { useState } from 'react';

export default function InteractiveQuestion() {
  const [answer, setAnswer] = useState(false);

  return (
    <section className="question-section" aria-labelledby="question-title">
      <div className="question-stars" aria-hidden="true">✦　·　✧　·　✦</div>
      <div className="question-card">
        <p className="eyebrow">One question</p>
        <h2 id="question-title">How many memories<br /><em>does a friendship need?</em></h2>
        <div className="question-actions" aria-live="polite">
          {answer ? (
            <p className="answer-reveal"><strong>∞</strong><br />Apparently...<br />more than we could ever count.</p>
          ) : (
            <button className="question-orb" type="button" onClick={() => setAnswer(true)} aria-label="Reveal the answer">?</button>
          )}
        </div>
      </div>
    </section>
  );
}
