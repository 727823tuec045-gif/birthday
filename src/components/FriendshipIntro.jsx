import React, { useEffect, useRef } from 'react';

const letterText = `Hey dhivyyy

Clg vanthappo enakku theriyathu ipdi oru bond irukumnu first ne enakku message panina hii i am dhivyabharathi class repnu cted solli thara solli ketta nanum solli kuduthen crrt ahh unakku appo fever na etho ketappo sonna aprm next day fever epdi irukunu keten aprm apdiyae continue auchu ne tha sonna ennaiya best friend enaku shock aageruchu nanu keten aprm 2 daysla photo eduthom ne tha koopita enna sema happy ennailam oru aalnu ne koopitu photo edutha aprm sapidalam vaanu koopita aprm daily night saptutu call pannuven summa enna pandra saptiyanu ketpen avlothan dude nu koptutu irunthen apdiyae continue auchu aana ennanh therila unakku avlolam ennaiya pudikatha summa pesuva oru frnd ahh avlothan aana na nalla attach aageten dailyum nane call paniruven apove avlo pudikum unna aprm 2nd yearla velila vanthen ne varenu tha v2la kettu vanthen velila aprm appo appo velila ponom aprm neraya ponom nalla sapitom aprm tha ne ennoda attach aana ne ketu ethukumey no sonathu illa vaa na vanthuruven aprm epomey nan tha unna kopida varuven drop panna varuven unakagave oorula irunthu vanthuruven🫂💖

Ne enakku name vetchu dudu nu aprm unakku bubu. Dudu💖bubu always ♾️

Unakuna epomey vanthuruven enna sandai kovamnalum.

First yearla irunthu ipoo varaikum unna avlo hurt paniruken irunthalum enta sandai katuva urimaiyoda aprm sari aagerum namakulla aana na unna neraya hurt paniruken Sorry... Ennaiya sad aaga vida maata ooruku poi 2 days call panala yen da panalanu ketpa🥺🫂 nalla parthupa.

Epdi time pochuney therila 4 years seekiram mudinjuruchu methuva time poirukalam... Ini avlothan mudiya poguthu aluga varuthu miss you more and more and more and moreeeeeeeeee🥺🥺🥺. Ennalum dhivy dhivyyy dhivyyynte irunthen ipolam ini epoo meet panuvomnu feel panitu iruken avlothan mudiya poguthunu.

Na onnu aasai patale vangi kuduthuruva ipdi oru friend never expected in my life. College days are very very beautiful only because of you. I will always miss those days which is spent with you. Nijamae enakku unna pudikum ne appo appo feel pandrela pudikama poitanenna pandrathunu.

Epdi apdi pogum engayachum pogumpothu parkurapoo nalla iruntha unakku nalla irukumnu parthu vanguven selavy panna yosikavae maaten ellamey panuven apdi irukuraplo. Epdi viduven. Romva romba pidikum.💞🥰😍

Ne thangameyy dudunu epayachum soluva, u care so much. Intern porapolam ethukku pesama irunthomnu therila 2ndu internun pesavae illa olunga sandai tha renduperukum na unna ethachum panite iruken. Sorry for that.

Our little conversation to our endless talks of days and nights with arguments, fun, depression and happiness — every memory with you means a lot to me. Thank you for staying with me in highs and lows.

Happiest birthday to my dearest Bubu💖😍`;

export default function FriendshipIntro() {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const audio = audioRef.current;
    if (!section || !audio) return undefined;

    const playAudio = () => {
      audio.play().catch(() => {
        const retry = () => {
          audio.play().catch(() => {});
        };
        window.addEventListener("pointerdown", retry, { once: true });
        window.addEventListener("keydown", retry, { once: true });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          playAudio();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="story-section intro-section" id="begin" aria-labelledby="intro-title">
      <audio ref={audioRef} src="/memories/audio.mpeg" preload="auto" />
      <div className="section-glow section-glow-coral" aria-hidden="true" />
      <div className="section-number" aria-hidden="true">01</div>
      <div className="intro-layout content-width">
        <div className="intro-copy handwritten-letter">
          <p className="eyebrow">01 · a handwritten letter</p>
          <h2 id="intro-title">Dear Dhivyyyy,</h2>
          <p className="body-copy">
            Somewhere between our first conversations and all the laughter
            that followed, you became one of the most special people in my
            life.
            <br /><br />
            Thank you for every silly moment, every honest conversation, and
            for being wonderfully, unmistakably you.
          </p>
          <div className="signature-line">
            <span className="signature-mark">✦</span>
            <span>with all my friendship, always</span>
          </div>
        </div>
        <div className="intro-quote glass-card">
          <div className="intro-photo-ribbon" aria-label="Friendship memories">
            {["01", "02", "03"].map((number, index) => (
              <figure key={number} className={`intro-photo intro-photo-${index + 1}`}>
                <img src={`/memories/${number}.jpg`} alt={`Friendship memory ${number}`} />
                <figcaption>{number}</figcaption>
              </figure>
            ))}
          </div>
          <span className="quote-mark" aria-hidden="true">“</span>
          <div className="letter-scroll" aria-label="A birthday letter for Dhivya">
            <p>{letterText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
