import React, { useEffect, useRef, useState } from "react";
import "./FriendshipTree.css";

const quotes = [
  "Some ordinary days became unforgettable because you were beside me.",
  "We never planned this memory, but it became one of my favorites.",
  "One picture, one moment, and a thousand reasons to smile.",
  "Different days, countless laughs, one beautiful friendship.",
  "Some memories never get old when they are shared with you.",
  "You make even the most random moments feel special.",
  "The best kind of comfort is a friend who simply understands.",
  "Our laughter has a way of finding us wherever we are.",
  "This little moment still carries the biggest smile.",
  "College gave me memories; it gave me you too.",
  "Thank you for being my safe place on difficult days.",
  "The silliest plans somehow became our sweetest stories.",
  "Growing up feels lighter with a friend like you.",
  "Every shared secret added another thread to our story.",
  "A simple day with you is never really simple.",
  "You have been there for the tears and the ridiculous laughter.",
  "Some friendships feel like sunshine in a crowded room.",
  "This is proof that the best memories happen unexpectedly.",
  "Our inside jokes deserve their own little museum.",
  "You turn ordinary photos into treasured chapters.",
  "No matter how busy life gets, this memory stays bright.",
  "The happiest moments are often the ones we almost missed.",
  "You make every adventure more fun and every setback smaller.",
  "A thousand tiny moments built this beautiful friendship.",
  "We have changed so much and still laugh the same way.",
  "Your friendship makes every season feel warmer.",
  "This smile says everything words never could.",
  "I will always be grateful for the days we made our own.",
  "Even our chaotic moments became stories worth keeping.",
  "You are the friend who makes showing up feel easy.",
  "One of my favorite places is anywhere we are laughing.",
  "The years move quickly, but these memories stay close.",
  "Thank you for celebrating my wins like they were yours.",
  "Our friendship is made of courage, kindness, and terrible jokes.",
  "You made the unfamiliar feel like home.",
  "Some people bring calm; you bring calm and wonderful chaos.",
  "Every chapter is better with your name somewhere in it.",
  "We found joy in the smallest, most unexpected things.",
  "This moment reminds me how lucky I am to know you.",
  "The best stories begin with, “Remember when we…?”",
  "You have always known when I needed a laugh.",
  "Friendship is having someone who remembers every version of you.",
  "Our memories sparkle because your heart is in all of them.",
  "Through every change, you stayed wonderfully, faithfully you.",
  "Some days are ordinary until we look back at them together.",
  "You make growing older feel like growing happier.",
  "This is one more reason I will always choose our friendship.",
  "The distance between moments disappears when the memories return.",
  "Thank you for making room for every feeling and every dream.",
  "Fifty memories, countless laughs, and still so much ahead.",
];

const quoteSecondLines = [
  "I would choose that day again.",
  "Somehow, we always find the magic.",
  "That smile still says it all.",
  "This is what happy looks like.",
  "I hope we make a thousand more.",
  "Life is funnier when you are here.",
  "You make hard days feel gentle.",
  "Our best moments are never planned.",
  "A tiny moment with a huge meaning.",
  "The good old days are still growing.",
  "You never let me face anything alone.",
  "We laughed until the plan disappeared.",
  "Side by side, every step feels right.",
  "Our story is stitched with little joys.",
  "You make the everyday worth remembering.",
  "Every laugh is another favorite memory.",
  "Your friendship always lights the way.",
  "The unexpected days are often the best.",
  "No one tells a joke quite like you.",
  "You make every memory feel golden.",
  "This friendship shines through every season.",
  "We found happiness without even looking.",
  "With you, every road becomes an adventure.",
  "Small moments can hold enormous joy.",
  "Time changes things, never our laughter.",
  "You bring warmth wherever you go.",
  "One look, and the whole story returns.",
  "I will keep this day close forever.",
  "Even the mess had its own kind of magic.",
  "You make friendship feel wonderfully effortless.",
  "Anywhere with you feels like the right place.",
  "The years cannot take this feeling away.",
  "Your happiness has always mattered to me.",
  "Our weirdness is one of my favorite things.",
  "Thank you for making room for me.",
  "Peace and chaos, somehow you bring both.",
  "You belong in every favorite chapter.",
  "Joy was hiding in the tiniest details.",
  "This memory is a quiet kind of treasure.",
  "There is always another story to tell.",
  "You always knew how to brighten the room.",
  "You remember the details my heart keeps.",
  "Every memory glows a little brighter with you.",
  "You stayed true through every new beginning.",
  "Looking back makes this day shine again.",
  "You make every new age feel exciting.",
  "Our friendship is still my favorite choice.",
  "Even time feels close when I remember us.",
  "You make every dream feel possible.",
  "And this is only one chapter of forever.",
];

const memories = quotes.map((quote, index) => {
  const id = index + 1;

  return {
    id,
    image: `/memories/${String(id).padStart(2, "0")}.jpg`,
    quote: [quote, quoteSecondLines[index]],
  };
});

const stars = Array.from({ length: 35 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 19 + 7) % 55}%`,
  delay: `${(index % 9) * 0.6}s`,
}));

const fireflies = Array.from({ length: 25 }, (_, index) => ({
  left: `${(index * 43 + 5) % 100}%`,
  top: `${20 + ((index * 29 + 9) % 65)}%`,
  delay: `${(index % 8) * 0.75}s`,
}));

/*
  Positions are percentages inside the tree world.
  x = horizontal position
  y = vertical position
*/
const positions = [
  { x: 47, y: 78, r: -4 },
  { x: 39, y: 72, r: 3 },
  { x: 55, y: 70, r: -2 },
  { x: 32, y: 66, r: -3 },
  { x: 62, y: 64, r: 4 },

  { x: 25, y: 58, r: -2 },
  { x: 37, y: 57, r: 3 },
  { x: 51, y: 58, r: -4 },
  { x: 67, y: 56, r: 2 },
  { x: 75, y: 52, r: -3 },

  { x: 18, y: 51, r: 3 },
  { x: 30, y: 49, r: -2 },
  { x: 43, y: 50, r: 4 },
  { x: 57, y: 48, r: -3 },
  { x: 70, y: 47, r: 2 },

  { x: 82, y: 44, r: -4 },
  { x: 23, y: 42, r: 2 },
  { x: 35, y: 40, r: -3 },
  { x: 49, y: 42, r: 3 },
  { x: 63, y: 39, r: -2 },

  { x: 77, y: 37, r: 4 },
  { x: 15, y: 35, r: -3 },
  { x: 28, y: 34, r: 2 },
  { x: 41, y: 33, r: -4 },
  { x: 55, y: 35, r: 3 },

  { x: 68, y: 32, r: -2 },
  { x: 83, y: 30, r: 4 },
  { x: 21, y: 28, r: -3 },
  { x: 34, y: 27, r: 2 },
  { x: 47, y: 28, r: -2 },

  { x: 60, y: 26, r: 4 },
  { x: 73, y: 25, r: -3 },
  { x: 87, y: 24, r: 2 },
  { x: 13, y: 23, r: -4 },
  { x: 27, y: 20, r: 3 },

  { x: 40, y: 19, r: -2 },
  { x: 53, y: 20, r: 4 },
  { x: 65, y: 18, r: -3 },
  { x: 78, y: 18, r: 2 },
  { x: 90, y: 17, r: -4 },

  { x: 19, y: 15, r: 3 },
  { x: 32, y: 13, r: -2 },
  { x: 46, y: 14, r: 4 },
  { x: 59, y: 12, r: -3 },
  { x: 71, y: 13, r: 2 },

  { x: 82, y: 11, r: -3 },
  { x: 38, y: 8, r: 2 },
  { x: 51, y: 7, r: -4 },
  { x: 64, y: 8, r: 3 },
  { x: 76, y: 7, r: -2 },
];

export default function FriendshipTree() {
  const sectionRef = useRef(null);
  const worldRef = useRef(null);
  const hasStarted = useRef(false);

  const [activeMemory, setActiveMemory] = useState(null);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setStarted(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || finished) return;

    let index = 0;
    let timeout;

    const showMemory = () => {
      setActiveMemory(index);

      timeout = setTimeout(() => {
        if (index === memories.length - 1) {
          setActiveMemory(null);
          setFinished(true);
          return;
        }

        index++;
        showMemory();
      }, 7000);
    };

    const startDelay = setTimeout(showMemory, 3500);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout);
    };
  }, [started, finished]);

  useEffect(() => {
    if (!worldRef.current) return;

    if (activeMemory === null) {
      worldRef.current.style.setProperty("--camera-x", "0%");
      worldRef.current.style.setProperty("--camera-y", "0%");
      return;
    }

    const p = positions[activeMemory];

    const moveX = 50 - p.x;
    const moveY = 50 - p.y;

    worldRef.current.style.setProperty(
      "--camera-x",
      `${moveX * 0.45}%`
    );

    worldRef.current.style.setProperty(
      "--camera-y",
      `${moveY * 0.45}%`
    );
  }, [activeMemory]);

  return (
    <section
      ref={sectionRef}
      className={`friendship-tree-section ${
        started ? "tree-started" : ""
      } ${finished ? "tree-finished" : ""}`}
    >
      {/* BACKGROUND */}
      <div className="tree-sky">
        <div className="moon" />

        {stars.map((star, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}

        {fireflies.map((firefly, i) => (
          <span
            key={`fire-${i}`}
            className="firefly"
            style={{
              left: firefly.left,
              top: firefly.top,
              animationDelay: firefly.delay,
            }}
          />
        ))}
      </div>

      {/* TITLE */}
      <div className="tree-title">
        <span>OUR</span>
        <h2>FRIENDSHIP</h2>
        <h3>TREE</h3>

        <p>
          Every picture holds a memory.
          <br />
          Every memory holds a story.
          <br />
          Every story is a part of us.
        </p>
      </div>

      {/* CAMERA VIEW */}
      <div className="tree-camera">
        <div
          ref={worldRef}
          className={`tree-world ${
            activeMemory !== null ? "camera-moving" : ""
          }`}
        >
          {/* TREE */}
          <div className="tree-art">

            {/* CANOPY */}
            <div className="canopy canopy-1" />
            <div className="canopy canopy-2" />
            <div className="canopy canopy-3" />
            <div className="canopy canopy-4" />
            <div className="canopy canopy-5" />

            {/* BRANCHES */}
            <svg
              className="branches"
              viewBox="0 0 1000 800"
              preserveAspectRatio="none"
            >
              {/* MAIN TRUNK */}
              <path
                className="main-branch"
                d="M500 820
                   C480 700 470 610 500 520
                   C525 440 500 370 470 310
                   C450 260 455 210 500 160"
              />

              {/* LEFT MAJOR */}
              <path
                className="major-branch"
                d="M495 540
                   C420 480 350 430 260 390
                   C200 360 145 330 80 300"
              />

              {/* LEFT UPPER */}
              <path
                className="major-branch"
                d="M475 400
                   C400 350 330 300 250 260
                   C190 230 140 210 90 180"
              />

              {/* LEFT TOP */}
              <path
                className="major-branch"
                d="M465 300
                   C400 245 350 200 300 155
                   C250 120 190 100 140 95"
              />

              {/* RIGHT MAJOR */}
              <path
                className="major-branch"
                d="M505 530
                   C575 470 650 430 730 390
                   C810 350 870 315 940 285"
              />

              {/* RIGHT UPPER */}
              <path
                className="major-branch"
                d="M510 410
                   C590 350 650 305 730 260
                   C800 220 860 195 930 180"
              />

              {/* RIGHT TOP */}
              <path
                className="major-branch"
                d="M505 315
                   C560 255 620 210 690 165
                   C760 120 820 105 880 95"
              />

              {/* SECONDARY BRANCHES */}
              <path
                className="secondary-branch"
                d="M385 450 C320 420 280 380 230 340"
              />

              <path
                className="secondary-branch"
                d="M350 360 C300 330 250 290 200 250"
              />

              <path
                className="secondary-branch"
                d="M330 250 C280 220 235 180 190 145"
              />

              <path
                className="secondary-branch"
                d="M620 450 C690 410 740 375 790 330"
              />

              <path
                className="secondary-branch"
                d="M650 350 C710 320 760 280 810 240"
              />

              <path
                className="secondary-branch"
                d="M675 250 C730 220 780 180 825 145"
              />

              {/* LOWER ROOTS */}
              <path
                className="root"
                d="M500 700 C430 730 350 760 250 790"
              />

              <path
                className="root"
                d="M500 720 C570 750 660 780 760 795"
              />

              <path
                className="root"
                d="M475 700 C420 770 380 790 330 810"
              />

              <path
                className="root"
                d="M530 700 C580 770 630 795 690 810"
              />
            </svg>

            {/* TRUNK GLOW */}
            <div className="trunk-glow" />

            {/* ROOT LIGHT */}
            <div className="root-light" />

            {/* MEMORY PHOTOS */}
            <div className="memory-layer">
              {memories.map((memory, index) => {
                const p = positions[index];
                const active = activeMemory === index;

                return (
                  <div
                    key={memory.id}
                    className={`memory-node ${
                      active ? "active-memory" : ""
                    }`}
                    style={{
                      left: `${p.x}%`,
                      top: `${p.y}%`,
                      "--rotation": `${p.r}deg`,
                    }}
                  >
                    <div className="photo-branch">
                      <div className="memory-photo">
                        <img
                          src={memory.image}
                          alt={`Memory ${String(memory.id).padStart(
                            2,
                            "0"
                          )}`}
                        />
                      </div>

                      <span className="memory-number">
                        {String(memory.id).padStart(2, "0")}
                      </span>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* LANTERNS */}
            <div className="lantern lantern-1">✦</div>
            <div className="lantern lantern-2">✦</div>
            <div className="lantern lantern-3">✦</div>
            <div className="lantern lantern-4">✦</div>

            {/* GROUND */}
            <div className="ground-glow" />
          </div>

          {activeMemory !== null && !finished && (
            <div className="memory-caption">
              <span>
                MEMORY {String(activeMemory + 1).padStart(2, "0")} / 50
              </span>
              <p>
                {memories[activeMemory].quote.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FINAL MESSAGE */}
      {finished && (
        <div className="tree-final-message">
          <span>50 MEMORIES.</span>
          <span>COUNTLESS MOMENTS.</span>
          <span>ONE BEAUTIFUL FRIENDSHIP.</span>

          <h1>Happy Birthday, Dhivya ♡</h1>
        </div>
      )}

      {/* TOP LABEL */}
      <div className="tree-label">
        THE FINAL CHAPTER
      </div>
    </section>
  );
}