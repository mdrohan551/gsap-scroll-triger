import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "./assets/components/Nav";
import Loaderanim from "./assets/components/Loaderanim";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    audioRef.current = new Audio("/public/audio/water.mp3");
    audioRef.current.volume = 1;

    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
      // Scale animation
      gsap.fromTo(
        containerRef.current,
        { scale: 0.8, opacity: 1 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            // Play sound AFTER animation
            audioRef.current.play().catch(err => console.warn("Audio error:", err));

            // Now animate MTN text and others
            gsap.fromTo(
              ".text-letter-left",
              { x: "-200%", opacity: 0 },
              { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" }
            );
            gsap.fromTo(
              ".text-letter-right",
              { x: "200%", opacity: 0 },
              { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.2 }
            );
            gsap.fromTo(
              ".water-image",
              { scale: 0.3, opacity: 0 },
              { scale: 1, opacity: 0.7, ease: "power2.out" }
            );
          },
        }
      );
    }, 14500);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Scroll-triggered animations only
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".tow",
          start: "0% 90%",
          end: "50% 80%",
          scrub: true,
        },
      });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".tow",
          start: "0% 70%",
          end: "30% 50%",
          scrub: true,
        },
      });

      const tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".dew",
          start: "50% 30%",
          end: "100% 50%",
          scrub: true,
        },
      });

      const tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".tow",
          start: "50% 30%",
          end: "100% 10%",
          scrub: true,
          toggleActions: "restart reverse restart reverse", // নতুন
        },
      });
      const tl8 = gsap.timeline({
        scrollTrigger: {
          trigger: ".three",
          start: "0% 50%",
          end: "10% 50%",
          scrub: true,
          onLeaveBack: () => {
            gsap.set(".mojo", { rotate: "40deg" });
            gsap.set(".fanta", { rotate: "-40deg" });
          },

        },
      });
      tl8.to(".fanta", {
        rotate: 0,
        ease: "power1.out",
      });
      tl8.to(".mojo", {
        rotate: 0,
        ease: "power1.out",
      });
      tl.to(".mainDew", {
        top: "132%",
        left: "20%",
        ease: "power1.out",
      });
      tl.to(".water-image ", {
        width: "0",
        ease: "power1.out",
      });

      tl3.to(".lemon", {
        top: "136%",
        left: "80%",
        opacity: 0.5,
        ease: "power1.out",
      });

      tl6.to(".leapcut", {
        top: "110%",
        left: "80%",
        ease: "power1.out",
        rotate: "230deg",
      });

      tl6.to(".leaf2", {
        top: "140%",
        left: "5%",
        ease: "power1.out",
        rotate: "200deg",
        zIndex: 50,
      });

      tl3.to(".lemonslic", {
        top: "90%",
        left: "20%",
        ease: "power1.out",
      });

      tl7.to(".mainDew", {
        top: "242%",
        left: "50%",
        ease: "power1.out",
        width: "10rem",
        height: "20rem",
      });

      tl7.to(".lemonslic", {
        top: "213%",
        left: "48%",
        ease: "power1.out",
        width: "12rem",
      });





    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <Loaderanim />
      )}



      <div
        ref={containerRef}
        className={`transition-all duration-1000 ${isLoading ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
      >
        <div className="w-full h-screen custom-gradiant-bg text-white">
          <div className="container mx-auto">
            <Nav />
            <img
              src="/images/leap.png"
              className="w-[30rem] h-auto absolute z-20 right-0"
              alt="Product"
            />
          </div>

          <div className="container mx-auto">
            <div className="dew flex items-center justify-center w-full h-screen relative">
              <div className="product-image">
                <h1 className="text-white bg-gradient-to-b text-[20vw] fontSug font-extrabold uppercase leading-none relative select-none flex items-center justify-center">
                  <span className="text-letter-left">MTN</span>
                  <span className="relative inline-block ml-2 mr-2">
                    <span className="z-10 relative">D</span>
                    <span className="absolute inset-0 z-30 text-stroke pointer-events-none">
                      D
                    </span>
                  </span>
                  <span className="">EW</span>
                </h1>

                <div
                  className="transition-all duration-500 ease-in-out w-[20.7rem] h-[40rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mainDew "
                  alt="Product"
                ></div>

                <img
                  src="/images/Water-PNG.png"
                  className="w-[40rem] h-auto absolute water-image bottom-20 right-126 z-5 opacity-70 water-image transition-all duration-500 ease-in-out"
                  alt="Product"
                />
                <img
                  src="/images/lemonslic.png"
                  className="w-[17rem] h-auto lemonslic absolute top-2 right-126 z-10 transition-all duration-500 ease-in-out"
                  alt="Product"
                />
                <img
                  src="/images/leapcut.png"
                  className="w-[17rem] h-auto leapcut absolute z-10 top-60 -left-40 transition-all duration-500 ease-in-out"
                  alt="Product"
                />
                <img
                  src="/images/leaf2.png"
                  className="w-[10rem] h-auto absolute z-10 bottom-60 -right-25 leaf2 -rotate-80 transition-all duration-500 ease-in-out"
                  alt="Product"
                />
                <img
                  src="/images/lemon.webp"
                  className="w-[22rem] h-auto lemon absolute z-21 bottom-10 left-100 transition-all duration-500 ease-in-out"
                  alt="Product"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="tow custom2-gradiant-bg w-full h-screen">
          <div className="container grid grid-cols-2 gap-2 mx-auto px-6">
            <div className="lft-two mt-4">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="green"
                  d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="rght-two flex items-center">
              <div className="text-white">
                <h1 className="text-5xl fontSug mb-4">Flavour Updated</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam, excepturi sed, itaque placeat id natus soluta veniam
                  obcaecati qui a laborum laboriosam dolorem illum labore sit,
                  voluptates commodi neque dolores tempore temporibus deleniti?
                  Nobis, ratione hic error quis cum neque nulla laudantium nostrum
                  sit nihil dolorum quisquam enim quaerat, eaque ex sequi, harum
                  totam quia non! Labore, neque! Amet voluptatem illo similique
                  recusandae! Ex quaerat quibusdam asperiores, ducimus tempore
                  magni labore. Tenetur voluptas, quos ex repellendus provident
                  mollitia laboriosam adipisci alias a impedit, cum accusamus
                  rerum delectus eaque facilis veniam quia laborum incidunt ea
                  assumenda! Eos magni aspernatur quod distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="three flex gap-12 justify-center items-center w-full min-h-screen custom-gradiant-bg py-12">
          {/* Left Card */}
          <div className="card bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center relative w-[26rem] min-h-[480px] ">
            <img
              className=" w-50 absolute top-5 z-0 left-15"
              src="/images/lemonslic.png"
              alt=""
            />
            <img
              id=""
              className="w-full mb-6 mt-16 z-1 -rotate-40 fanta  transition-all duration-500 ease-in-out"
              src="/images/fanta.webp"
              alt=""
            />
            <h1 className="text-4xl font-bold mb-6">FANTA</h1>
            <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition">
              Buy Now
            </button>
          </div>
          {/* Middle Card (Fanta) */}
          <div className="card bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center justify-end w-[26rem] min-h-[480px]">
            <div className="flex flex-col items-center w-full mt-auto">
              <h1 className="text-4xl font-bold mb-6">Fanta</h1>
              <button className="bg-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition">
                Buy Now
              </button>
            </div>
          </div>
          {/* Right Card */}
          <div className="card bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center relative w-[26rem] min-h-[480px]">
            <img
              className=" w-50 absolute top-10 z-0 right-15"
              src="/images/bgmojo.webp"
              alt=""
            />
            <img
              id="pepsi"
              className="w-full mb-6 mt-16 z-1 rotate-40 mojo transition-all duration-500 ease-in-out"
              src="/images/mojo.webp "
              alt=""
            />
            <h1 className="text-4xl font-bold mb-6">MOJO</h1>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
