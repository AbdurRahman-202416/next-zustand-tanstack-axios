import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Pagination } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

const cards = [
  {
    id: 1,
    image: "/card/_card.png",
    name: "현대카드 오리지널 CT ... (1234)",
  },
  {
    id: 2,
    image: "/card/card-2.png",
    name: "신한카드 트래블제로 ... (5678)",
  },
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex + 1);
  };

  return (
    <div className="w-full h-[320px]  items-center gap-2 self-stretch px-4 py-8  max-w-md mx-auto">
      <Swiper
        spaceBetween={24}
        centeredSlides={true}
        slidesPerView={1.5}
        onSlideChange={handleSlideChange}
        modules={[Pagination]} // Optional: can be removed now
        className="!overflow-visible"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={` p-2 text-center transition-all duration-300 ${
                currentIndex - 1 === index
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-90"
              }`}
            >
              <Image
                src={card.image}
                alt={`Card ${card.id}`}
                width={101}
                height={160}
                className="w-full h-[140px] rounded-xl object-cover"
              />
              <p className="text-sm mt-2">{card.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-2 text-sm text-gray-500">
        <span className="text-red-600">{currentIndex}</span> / {cards.length}
      </div>

     
      <div className="mt-4 w-full text-center flex flex-row justify-between text-sm">
        <p className="text-gray-500">충전잔액</p>
        <p className="font-bold text-lg">{"{5,000,000}"}원</p>
        <button className="ml-2 px-3 py-1 text-xs bg-blue-500 text-white rounded">
          충전
        </button>
      </div>
    </div>
  );
}
