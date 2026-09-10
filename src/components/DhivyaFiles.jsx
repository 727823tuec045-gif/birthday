import React from 'react';

const files = [
  {
    index: '01',
    label: 'Name',
    title: 'BUBU',
    text: 'Best friend',
    icon: '✦',
    tone: 'rose',
    image: '01',
    note: 'The best',
  },
  {
    index: '02',
    label: 'Status',
    title: 'THANGAMEE',
    text: 'Friendship level: maximum',
    icon: '◒',
    tone: 'violet',
    image: '02',
    note: 'The forever one',
  },
  {
    index: '03',
    label: 'Normal behavior',
    title: 'DHIVYYY',
    text: 'Highly classified friendship information.',
    icon: '∞',
    tone: 'gold',
    image: '03',
    note: 'A little chaos',
  },
];

export default function DhivyaFiles() {
  return (
    <section className="story-section files-section" aria-labelledby="files-title">
      <div className="section-number" aria-hidden="true">02</div>
      <div className="content-width">
        <div className="section-heading files-heading">
          <div>
              <p className="eyebrow">Chapter two · classified</p>
            <h2 id="files-title">The Dhivya files</h2>
          </div>
          <p className="heading-aside">Three reasons<br />this friendship is rare.</p>
        </div>
        <div className="files-grid">
          {files.map((file) => (
            <article className={`file-card file-card-${file.tone}`} key={file.index}>
              <div className="file-card-image">
                <img src={`/memories/${file.image}.jpg`} alt={`${file.title} memory`} />
                <span>{file.note}</span>
              </div>
              <div className="file-card-top">
                <span className="file-index">{file.index}</span>
                <span className="file-icon" aria-hidden="true">{file.icon}</span>
              </div>
              <p className="file-label">{file.label}</p>
              <h3>{file.title}</h3>
              <p>{file.text}</p>
              <span className="file-card-stamp">classified · verified ✓</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
