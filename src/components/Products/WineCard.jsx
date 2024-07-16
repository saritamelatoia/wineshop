import styled from 'styled-components';
import React from 'react';
import Button from '../Button/Button';


const WineCardStyled = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  text-align: center;
  background-color: #ffffff;
  width: 300px;
  height: 450px;
  border-radius: 30px;
  gap: 20px;
`;

function WineCard({ name, image, description, price }) {
  return (
    <WineCardStyled>
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
      <p>{description}</p>
      <p>${price}</p>

      <Button>Comprar</Button>

    </WineCardStyled>
  );
}

export default WineCard;


