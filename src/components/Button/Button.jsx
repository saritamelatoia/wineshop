// Button.jsx

import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;


    &:hover {
    background-color: #0056b3; /* Cambia el color de fondo al pasar el cursor */
    /* Puedes añadir más estilos aquí para personalizar el efecto */
  }
`;

function Button({ children, onClick }) {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
