/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { CarouselButton, CarouselContainer, CarouselImages } from "./styles";

type CarouselProps = {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <CarouselContainer>
      <CarouselButton className="prev" onClick={handlePrev}>
        &#8249;
      </CarouselButton>
      <CarouselImages style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image: string | undefined, index: number) => (
          <img key={index} src={image} alt={`Imagem ${index + 1}`} />
        ))}
      </CarouselImages>
      <CarouselButton className="next" onClick={handleNext}>
        &#8250;
      </CarouselButton>
    </CarouselContainer>
  );
};
