import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

import "swiper/css";
import Image from "next/image";

const cards = [
  {
    id: 1,
    image: "/card/_card.png",
    name: "현대카드 오리지널 CT ... (1234)",
    isValid: false,
  },
  {
    id: 2,
    image: "/card/card-2.png",
    name: "신한카드 트래블제로 ... (5678)",
    isValid: true,
  },
  {
    id: 3,
    image: "/card/_card.png",
    name: "현대카드 오리지널 CT",
    isValid: true,
  },
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex + 1);
  };

  return (
    <div className=" mt-10 rounded-[12px] shadow-sm w-full h-[264px] max-w-md mx-auto items-center py-5 px-4 overflow-hidden justify-center">
      <Swiper
        centeredSlides={true}
        spaceBetween={8}
        slidesPerView={1.7}
        onSlideChange={handleSlideChange}
        className="!overflow-visible"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative text-center transition-all duration-300 ${
                currentIndex - 1 === index
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-90"
              }`}
            >
              {!card.isValid && (
                <div className="absolute inset-0 z-50 flex items-center justify-center">
                  <Image
                    src="/card/tip.png"
                    alt="Tip Icon"
                    width={40}
                    height={40}
                  />
                </div>
              )}

              <Image
                src={card.image}
                alt={`Card ${card.id}`}
                width={101}
                height={159}
                className={`w-full rounded-[8px] z-30 object-cover mx-auto ${
                  card.isValid ? "opacity-100" : "opacity-30 brightness-50"
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {cards.map((card, index) => (
        <div key={card.id}>
          {currentIndex - 1 === index && (
            <p className="text-sm text-center mt-2 transition-all duration-500 ease-out transform opacity-100 translate-y-0">
              {card.name}
            </p>
          )}
        </div>
      ))}

      {/* Numeric Pagination only */}
      <div className="text-center mt-2 text-sm text-gray-500">
        <span className="text-red-600">{currentIndex}</span> / {cards.length}
      </div>

      {/* Bottom Info */}
      <div className="mt-4 w-full px-4 text-sm">
        {cards.map((card, index) => {
          if (index !== currentIndex - 1) return null;

          return !card.isValid ? (
            <p key={index} className="text-center">
              사용할 수 없는 카드입니다.
            </p>
          ) : (
            <div
              key={index}
              className="flex items-center justify-between h-[30px]"
            >
              <p className="text-gray-500">충전잔액</p>
              <div className="flex items-center gap-3 justify-center">
                <p className="font-bold text-lg">{"{5,000,000}"}원</p>
                <button className="ml-2 px-3 py-1 text-xs bg-blue-500 text-white rounded">
                  충전
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
