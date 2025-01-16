"use client";

import Carousel from "./components/Carousel";
import Counter from "./components/Counter";
import { Container } from "./styles";

export default function Home() {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image8.jpg",
    "/image9.jpg"
  ];
  
  return (
    <Container>
      <p style={{textAlign: "center", marginBottom: "1rem"}}>Te amo ❤️</p>
      <Carousel images={images} />
      <Counter />
    </Container>
  );
}
