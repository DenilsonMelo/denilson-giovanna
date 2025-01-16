import styled from "styled-components";

export const CarouselContainer = styled.main`
  position: relative;
  width: 100%;
  max-width: 320px;
  height: auto;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
`;

export const CarouselImages = styled.div`
  display: flex;
  transition: transform 0.2s ease-in-out;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 16px;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  z-index: 10;

  &.prev{
    left: 10px;
  }

  &.next{
    right: 10px;
  }
`;


