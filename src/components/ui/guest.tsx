"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import { PanInput, WheelInput } from "@egjs/react-axes";
import { orbitronFont } from "@/lib/fonts";

const images = [
  { src: "/guest1.jpeg" },
  { src: "/guest2.jpeg" },
  { src: "/guest3.jpeg" },
  { src: "/guest4.jpeg" },
  { src: "/guest5.jpeg" },
  { src: "/guest6.jpeg" },
 
  { src: "/guest8.jpeg" },
  { src: "/guest9.jpeg" },
  { src: "/guest10.jpeg" },
  { src: "/guest11.jpeg" },
];

const COUNT = images.length;
const ANGLE = 360 / COUNT;

export default function Carousel(): React.JSX.Element {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const updateTransform = (distance = 500) => {
    if (carouselRef.current) {
      const rotation = -currentIndex * ANGLE; // snap to index
      carouselRef.current.style.transform = `translateZ(-${distance}px) rotateY(${rotation}deg)`;
    }
  };

  const rotateStep = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % COUNT); // step to next image
    timeoutRef.current = setTimeout(rotateStep, 3000);
  }, []);

  useEffect(() => {
    updateTransform(window.innerWidth < 640 ? 300 : 500);
  }, [currentIndex]);

  useEffect(() => {
    timeoutRef.current = setTimeout(rotateStep, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [rotateStep]);

  useEffect(() => {
    const cards = document.querySelectorAll(".carousel-touch-area");
    cards.forEach((el) => {
      const element = el as HTMLElement;
      new PanInput(element, { inputType: ["touch", "mouse"], scale: [1, 0] });
      new WheelInput(element, { useNormalized: false });
    });
  }, []);

  const rotateLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + COUNT) % COUNT);
  };

  const rotateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % COUNT);
  };

  return (
    <div className="carousel-container">
      <h2 className={`carousel-heading ${orbitronFont.className}`}>
        Maker’s Awardees 2024
      </h2>

      <div id="carouselWrapper">
        <div className="list_container">
          <div id="carousel" ref={carouselRef}>
            {images.map((item, index) => (
              <figure
                key={index}
                style={{
                  transform: `rotateY(${index * ANGLE}deg) translateZ(500px)`,
                }}
              >
                <div
                  className="list_cd carousel-touch-area"
                  style={{ backgroundImage: `url(${item.src})` }}
                  onClick={() => setSelectedImage(item.src)}
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

      {/* Modal for magnified image */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Magnified" className="modal-image" />
        </div>
      )}

      <style jsx>{`
        .carousel-container {
          position: relative;
          padding: 5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .carousel-heading {
          font-size: 2rem;
          font-weight: 600;
          color: #00bfff;
          text-align: center;
          margin-bottom: 1.5rem;
          letter-spacing: 1.5px;
        }

        @media (max-width: 640px) {
          .carousel-heading {
            font-size: 1.6rem;
            text-align: center;
          }
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
          border-radius: 16px;
          backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
          transition: transform 0.3s ease-in-out;
          cursor: pointer;
        }

        figure:hover .list_cd {
          transform: scale(1.08);
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

        /* Modal styling */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-image {
          max-width: 90%;
          max-height: 90%;
          border-radius: 12px;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 640px) {
          #carouselWrapper {
            height: 350px;
            perspective: 900px;
          }
          figure {
            width: 180px;
            height: 180px;
            margin: -90px 0 0 -90px;
          }
        }
      `}</style>
    </div>
  );
}
