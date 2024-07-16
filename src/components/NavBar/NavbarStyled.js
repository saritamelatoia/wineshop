// NavbarStyled.js
import styled from 'styled-components';

export const NavbarStyled = styled.nav`
    background-color: #333;
    color: #fff;
    padding: 1rem;
`;

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 768px) {
        align-items: flex-start;
    }
`;

export const NavbarLogo = styled.a`
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
`;

export const NavbarLinks = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    background-color: pink;
    width: 300px;
    height: 200px;
    align-items: flex-end;
    padding: 30px;
    }
`;

export const NavbarLink = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

