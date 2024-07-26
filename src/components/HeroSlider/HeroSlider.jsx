import React, { useState } from "react";
import styled from "styled-components";

// Importa las imágenes
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

// Array de slides con imágenes importadas
const slides = [
  {
    image: hero1,
    description: "El Bosc Cremat. Un vino excelente con notas de frutas rojas.",
  },
  {
    image: hero2,
    description:
      "La Vinya d'en Tomas. Un vino con un bouquet floral y un acabado suave.",
  },
  {
    image: hero3,
    description:
      "La Macabeu del Teixó. Vino robusto con notas de especias y chocolate.",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <HeroContainer>
      <HeroSlide>
        <Description>
          <p>
            <strong>{slides[currentIndex].description.split(".")[0]}</strong>
            {". "}
            {slides[currentIndex].description.split(".")[1]}
          </p>
        </Description>
        <Image>
          <img
            src={slides[currentIndex].image}
            alt={`Vino ${currentIndex + 1}`}
          />
        </Image>
      </HeroSlide>
      <Pagination>
        <Button className="prev" onClick={prevSlide}>
          &#10094;
        </Button>
        <Button className="next" onClick={nextSlide}>
          &#10095;
        </Button>
      </Pagination>
    </HeroContainer>
  );
};

export default HeroSlider;

// Styled Components

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 600px; /* Ajusta la altura para pantallas más grandes */
  }
`;

const HeroSlide = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Description = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;

  p {
    margin: 0;
    font-family: "Georgia", serif;
    font-size: 20px;

    strong {
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 22px;
    }
  }
`;

const Image = styled.div`
  width: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
      object-fit: contain; /* Ajusta el ajuste de la imagen en pantallas más grandes */
    }
  }
`;

const Pagination = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    /* Puedes agregar estilos específicos para el botón de "prev" aquí */
  }

  &.next {
    /* Puedes agregar estilos específicos para el botón de "next" aquí */
  }
`;
