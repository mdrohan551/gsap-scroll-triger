import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loaderanim = () => {
  const texts = ["Rohan Mohammad", "GSAP", "React JS", "Tailwind"];
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const textRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (started && index < texts.length) {
      const tl = gsap.timeline({
        onStart: () => {
          // Play sound on each text start
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            audioRef.current.volume = 0.5; // Set volume to 50%
          }
        },
        onComplete: () => {
          setTimeout(() => setIndex((prev) => prev + 1), 1000);
        },
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      ).to(textRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -50,
        duration: 1,
        ease: "power3.in",
        delay: 0.5,
      });
    }
  }, [index, started]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#47c7a7] via-[#5ed18c] to-[#2dd327]">
      <audio
        ref={audioRef}
        src="/audio/boom.mp3"
        preload="auto"
      />

      {!started && (
        <div
          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center cursor-pointer"
          onClick={() => setStarted(true)}
        >
          <h2 className="text-white text-4xl font-bold animate-pulse">
            Click to Start
          </h2>
        </div>
      )}

      {started && index < texts.length && (
        <h1
          ref={textRef}
          className="text-transparent text-[20vw] md:text-[10rem] bold uppercase tracking-wide text-center fontSug"
          style={{
            WebkitTextStroke: "2px white",
            textStroke: "2px white",
          }}
        >
          {texts[index]}
        </h1>
      )}
    </div>
  );
};

export default Loaderanim;
