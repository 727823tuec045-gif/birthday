import React from 'react';

const birthdayMessage = {
  kicker: 'From me to you',
  title: 'Dhivya,',
  paragraphs: [
    "I don't always say these things properly, but I hope you know how much your friendship means to me.",
    'Through all the random conversations, stupid jokes, good days and bad ones, I\'m genuinely grateful that I got to know you.',
    'This little website is just my way of saying one simple thing... I\'m really lucky to call you my best friend.',
  ],
  signoff: '— From your best friend',
  name: '♡',
};

export default function MessageSection() {
  return (
    <section className="story-section message-section" aria-labelledby="message-title">
      <div className="message-backdrop-word" aria-hidden="true">always</div>
      <div className="content-width message-content">
        <p className="eyebrow">{birthdayMessage.kicker}</p>
        <h2 id="message-title">{birthdayMessage.title}</h2>
        <div className="message-rule" />
        <div className="message-body">
          {birthdayMessage.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="message-signoff">
          <span>{birthdayMessage.signoff}</span>
          <strong>{birthdayMessage.name}</strong>
        </div>
        <p className="message-last-thing">There is one last thing... ↓</p>
      </div>
    </section>
  );
}
