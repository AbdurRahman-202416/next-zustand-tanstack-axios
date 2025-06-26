import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Pagination } from "swiper/modules";

import "swiper/css";

const cards = [
  {
    id: 1,
    image: "/card/_card.png",
    name: "현대카드 오리지널 CT ... (1234)",
  },
  {
    id: 2,
    image: "/card/card.png",
    name: "신한카드 트래블제로 ... (5678)",
  },
];
export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // start from 1

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex + 1);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        spaceBetween={24}
        centeredSlides={true}
        slidesPerView={1.5}
        onSlideChange={handleSlideChange}
        modules={[Pagination]}
        className="!overflow-visible"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`rounded-xl shadow-md p-2 bg-white text-center transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-50 scale-90"
                }`}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="w-full h-[140px] object-cover rounded-xl"
                />
                <p className="text-sm mt-2">{card.name}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="text-center mt-2 text-sm text-gray-500">
        {currentIndex} / {cards.length}
      </div>

      {/* Bottom Info */}
      <div className="mt-4 text-center text-sm">
        <p className="text-gray-500">충전잔액</p>
        <p className="font-bold text-lg">{"{5,000,000}"}원</p>
        <button className="ml-2 px-3 py-1 text-xs bg-blue-500 text-white rounded">
          충전
        </button>
      </div>
    </div>
  );
}
