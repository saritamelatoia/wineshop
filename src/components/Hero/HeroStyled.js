import styled from 'styled-components'

export const HeroContainerStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1400px;
    width: 100vw;
    height: 60vh;


@media (max-width: 968px) {
flex-direction: column;
}
`;
export const HeroTextContainerStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 50%;

h1 {
    font-size: 4rem;
    margin: 10px 0;
}

h2 {
    font-size: 2.5rem;
    margin: 10px 0;
}

p {
    font-size: 1.2rem;
}

@media (max-width: 968px) {
    width: 80%;
    align-items: center;
    text-align: center;
}
`;

export const HeroImageContainerStyled = styled.div`
width: 40%;
img {
    width: 80%;
    padding-top: 80px;
    padding-bottom: 75px;
    }

    @media (max-width: 960px){
        display: none;
    }
`

export const ClickButton = styled.button`
width: 200px;
height: 50px;
background-color: blue;
color: white;
border-radius: 40px
`