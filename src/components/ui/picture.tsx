"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const topImages = Array(15).fill("/COMING.png");

const PictureGallery: React.FC = () => {
  const [cardWidth, setCardWidth] = useState(300);
  const [cardHeight, setCardHeight] = useState(200);

  useEffect(() => {
    const updateCardSize = () => {
      if (window.innerWidth < 400) {
        setCardWidth(200);
        setCardHeight(120);
      } else if (window.innerWidth < 640) {
        setCardWidth(260);
        setCardHeight(160);
      } else if (window.innerWidth < 1024) {
        setCardWidth(300);
        setCardHeight(200);
      } else {
        setCardWidth(340);
        setCardHeight(240);
      }
    };

    updateCardSize();
    window.addEventListener("resize", updateCardSize);
    return () => window.removeEventListener("resize", updateCardSize);
  }, []);

  const handleImageClick = (src: string) => {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "9999";
    modal.style.cursor = "zoom-out";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Magnified Image";
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.border = "4px solid white";
    img.style.borderRadius = "12px";

    modal.appendChild(img);
    modal.onclick = () => document.body.removeChild(modal);
    document.body.appendChild(modal);
  };

  return (
    <div className="my-24 w-full py-12">
      {/* Carousel using Swiper */}
      <div className="px-2 sm:px-6 max-w-full" style={{ maxWidth: "100vw" }}>
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={0}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          navigation={true}
          className="mySwiper w-full"
          style={{ width: "100%", maxWidth: "100vw" }}
          key={`swiper-${cardWidth}-${cardHeight}`}
          onSwiper={(swiper) => { console.log('Swiper initialized:', swiper); }}
        >
          {topImages.map((src, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                maxWidth: "90vw",
                maxHeight: "60vw",
              }}
              className="rounded-xl overflow-hidden shadow-xl border border-white/20 hover:shadow-blue-500/40 cursor-pointer bg-black/60"
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={cardWidth}
                height={cardHeight}
                className="object-cover w-full h-full rounded-xl hover:opacity-100 transition duration-300"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Style override for white arrows */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0,0,0,0.5);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
        }
        .swiper-button-next {
          right: 8px !important;
        }
        .swiper-button-prev {
          left: 8px !important;
        }
        @media (max-width: 640px) {
          .swiper-button-next, .swiper-button-prev {
            width: 28px;
            height: 28px;
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PictureGallery;
