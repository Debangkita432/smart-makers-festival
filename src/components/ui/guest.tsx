"use client";
import React, { useEffect, useRef } from "react";
import { PanInput, WheelInput } from "@egjs/react-axes";
import { orbitronFont } from "@/lib/fonts";

const COUNT = 10;
const ANGLE = 360 / COUNT;

export default function Carousel(): React.JSX.Element {
  const carouselRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateTransform = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateZ(-400px) rotateY(${rotationRef.current}deg)`;
    }
  };

  const rotateStep = () => {
    rotationRef.current -= ANGLE;
    updateTransform();
    timeoutRef.current = setTimeout(rotateStep, 3000);
  };

  useEffect(() => {
    updateTransform();
    timeoutRef.current = setTimeout(rotateStep, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // ✅ FIXED GESTURE INIT (no .connect())
  useEffect(() => {
    const cards = document.querySelectorAll(".carousel-touch-area");
    cards.forEach((el) => {
      const element = el as HTMLElement;
      new PanInput(element, { inputType: ["touch", "mouse"], scale: [1, 0] });
      new WheelInput(element, { useNormalized: false });
    });
  }, []);

  const rotateLeft = () => {
    rotationRef.current += ANGLE;
    updateTransform();
  };

  const rotateRight = () => {
    rotationRef.current -= ANGLE;
    updateTransform();
  };

  const images = Array.from({ length: COUNT }).map((_, i) => ({
    src: "/coming.png",
  }));

  return (
    <div className="carousel-container">
      <h2 className={`carousel-heading ${orbitronFont.className}`}>Our Guests</h2>

      <div id="carouselWrapper">
        <div className="list_container">
          <div id="carousel" ref={carouselRef}>
            {images.map((item, index) => (
              <figure
                key={index}
                style={{
                  transform: `rotateY(${index * ANGLE}deg) translateZ(400px)`,
                }}
              >
                <div
                  className="list_cd carousel-touch-area"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="nav-buttons">
        <button onClick={rotateLeft}>&larr;</button>
        <button onClick={rotateRight}>&rarr;</button>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          padding: 5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .carousel-heading {
          font-size: 2.8rem;
          font-weight: 600;
          color: #00bfff;
          text-align: left;
          margin-bottom: 2rem;
          letter-spacing: 2px;
        }

        #carouselWrapper {
          width: 100%;
          height: 500px;
          perspective: 1300px;
        }

        .list_container {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }

        #carousel {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          transition: transform 0.8s ease-in-out;
        }

        figure {
          width: 240px;
          height: 240px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -120px 0 0 -120px;
          transition: transform 0.6s ease, box-shadow 0.3s;
        }

        .list_cd {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
          transition: transform 0.3s ease-in-out;
        }

        figure:hover .list_cd {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
        }

        .nav-buttons {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
        }

        .nav-buttons button {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 20px;
          border-radius: 12px;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(6px);
        }

        .nav-buttons button:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
