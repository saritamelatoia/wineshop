import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from '../BurguerButton/BurguerButton'; 

function Navbar() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        // si esta true lo pasa a false
        setClicked(!clicked)
    }
  return (
    <>
    <NavContainer>
    <h2>Logo <span>Logo</span></h2>
    <div className={`links ${clicked ? 'active' : ''}`}>
        <a onClick={handleClick} href="/">Home</a>
        <a onClick={handleClick} href="/">Shop</a>
        <a onClick={handleClick} href="/">About</a>
        <a onClick={handleClick} href="/">Contact</a>
        <a onClick={handleClick} href="/">Log In</a>
    </div>
    <div className='burguer'>
    <BurguerButton clicked={clicked} handleClick={handleClick}/>
    </div>
    <BgDiv className={`initial ${clicked ? 'active' : '' }`}></BgDiv>
    </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
h2{
    font-weight:400;
    span{
        font-weight:bold;
    }
}
padding: .4rem;
backgrpund-color: #000000;
display:flex;
align-items: center;
justify-content: space-between;

a{
    color: #be0909;
    text-decoration: none;
    margin-right:1rem;
}

.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .6s ease;
    a{
        color: #333;
        font-size: 2rem;
        display: block;
    }
    @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
        font-size: 1rem;
        color: #000000;
        display: inline;
    }
    }
}

.links.active{
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
a{
    font-size: 2rem;
    margin-top: 1rem;
    color: red;
}

.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
`

const BgDiv = styled.div`
background-color: #997171;
position: absolute;
top: -700;
left: -1000;
width: 100%;
height: 100%;
z-index: -1;
transition: all .6s ease;


&.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
`