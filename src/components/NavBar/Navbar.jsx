import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "../BurguerButton/BurguerButton";
import logo from "../../assets/logo.png";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <img src={logo} alt="Logo" />
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="/">
            Home
          </a>
          <a onClick={handleClick} href="/">
            Shop
          </a>
          <a onClick={handleClick} href="/">
            About
          </a>
          <a onClick={handleClick} href="/">
            Contact
          </a>
          <a onClick={handleClick} href="/">
            Log In
          </a>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    font-weight: 400;
    color: white;
  }

  padding: 0.4rem;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    margin-right: 1rem;
  }

  img {
    width: 70px;
    height: 70px;
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.6s ease;

    a {
      color: #ffffff;
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;

      a {
        font-size: 1rem;
        color: #ffffff;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
  }

  a {
    font-size: 2rem;
    margin-top: 1rem;
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #9a2020;
  position: absolute;
  top: -700px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
