"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Add useRouter import
import { CardType } from "@/components/ui/hover/scroll";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FiArrowRight } from "react-icons/fi";

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(/[\s_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function EventsPage() {
  const [cards, setCards] = useState<CardType[]>([]);
  const pathname = usePathname();
  const router = useRouter(); // Add router for navigation

  useEffect(() => {
    const path = pathname.split("/")[2];
    fetch(`/api/events/${path}`)
      .then((response) => response.json())
      .then((dataList) => {
        setCards(dataList);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [pathname]);
  return (
    <div className="h-fit">
      <div className="-ml-5 flex justify-center items-center pt-32 z-50">
        <div
          className={cn(
            "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500",
            tiaraFont.className
          )}
        >
          {toTitleCase(pathname.split("/")[2])} Events
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {cards
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((card, index) => {
              if (card.id === "50") {
                return null;
              }
              return card.id !== "15" && card.id !== "14" ? (
                <div
                  onClick={() => router.push(`${pathname}/${card.id}`)}
                  className="cursor-pointer group"
                >
                  <CardContainer
                    key={index}
                    containerClassName="relative flex items-center justify-center transition-all duration-200 ease-linear group-hover:animate-wavy"
                  >
                    <CardBody className="relative">
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={card.thumbnail}
                          className="rounded-xl"
                          alt="thumbnail"
                          width={1200}
                          height={800}
                          priority
                          unoptimized={typeof card.thumbnail === "string"}
                          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        />
                        <span className="absolute top-3 right-3 z-10">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/70 shadow-lg transition hover:bg-blue-500/80">
                            <FiArrowRight className="text-white text-2xl" />
                          </span>
                        </span>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              ) : (
                <div
                  onClick={() => router.push(`${pathname}/${card.id}`)}
                  className="cursor-pointer"
                >
                  <CardContainer
                    key={index}
                    containerClassName="relative flex items-center justify-center transition-all duration-200 ease-linear"
                  >
                    <CardBody className="relative">
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={card.thumbnail}
                          className="rounded-xl"
                          alt="thumbnail"
                          width={1200}
                          height={800}
                          priority
                          unoptimized={typeof card.thumbnail === "string"}
                          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        />
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              );
            })}
        </div>
      </div>
      {/* Wavy hover effect keyframes */}
      <style jsx global>{`
        @keyframes wavy {
          0% { transform: rotateY(0deg) scale(1) skewY(0deg); }
          20% { transform: rotateY(0.7deg) scale(1.01) skewY(0.7deg); }
          40% { transform: rotateY(-0.7deg) scale(1.005) skewY(-0.7deg); }
          60% { transform: rotateY(0.7deg) scale(1.012) skewY(0.7deg); }
          80% { transform: rotateY(-0.7deg) scale(1.008) skewY(-0.7deg); }
          100% { transform: rotateY(0deg) scale(1) skewY(0deg); }
        }
        .animate-wavy {
          animation: wavy 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
