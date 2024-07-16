import {ClickButton, HeroContainerStyled, HeroTextContainerStyled, HeroImageContainerStyled} from './HeroStyled'
import {useState} from 'react';
// import Button from '../UI/Button'

function Hero() {

    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
      setIsToggle(!isToggle)
    }

  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>{isToggle ? "Bienvenido" : "Chau pelotudo" }</h1>
        <ClickButton onClick={handleToggle}/> 
      </HeroTextContainerStyled>
      <HeroImageContainerStyled>
        <img src="https://img.freepik.com/fotos-premium/copa-vino-tinto-escritorio-madera-fondo-pared_488220-2909.jpg?w=826" 
        alt="cucu"/>
      </HeroImageContainerStyled>

      
    </HeroContainerStyled>
  )
}

export default Hero;