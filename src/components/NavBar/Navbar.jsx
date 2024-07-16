import { useState } from 'react';
import {
    NavbarStyled,
    NavbarWrapper,
    NavbarLogo,
    NavbarLinks,
    NavbarLink,
} from './NavbarStyled';

const Navbar = () => {

    return (
        <NavbarStyled>
            <NavbarWrapper>
                <NavbarLogo href="#">WineShop</NavbarLogo>
                <NavbarLinks>
                    <NavbarLink href="#">Home</NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Shop</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </NavbarLinks>
            </NavbarWrapper>
        </NavbarStyled>
    );
};

export default Navbar;
