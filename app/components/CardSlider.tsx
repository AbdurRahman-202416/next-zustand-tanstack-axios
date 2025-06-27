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
  },
  {
    id: 2,
    image: "/card/card-2.png",
    name: "신한카드 트래블제로 ... (5678)",
  },
  {
    id: 3,
    image: "/card/_card.png",
    name: "현대카드 오리지널 CT",
  },
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex + 1);
  };

  return (
    <div className=" mt-10 rounded-[12px] shadow-sm w-full h-[264px] max-w-md mx-auto items-center justify-center">
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
              className={` text-center transition-all duration-300 ${
                currentIndex - 1 === index
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-90"
              }`}
            >
              <Image
                src={card.image}
                alt={`Card ${card.id}`}
                width={101}
                height={159}
                className="w-full rounded-[8px] object-cover mx-auto"
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
      <div className="mt-4 w-full h-[30px] px-4 items-center text-center flex flex-row justify-between text-sm">
        <p className="text-gray-500">충전잔액</p>
       <div className="flex items-center gap-3 justify-center">
         <p className="font-bold text-lg">{"{5,000,000}"}원</p>
        <button className="ml-2 px-3 py-1 text-xs bg-blue-500 text-white rounded">
          충전
        </button>
       </div>
      </div>
    </div>
  );
}
