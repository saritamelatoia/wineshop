import { wines } from "../../data/wines";
import WineCard from './WineCard';
import styled from 'styled-components';

const WineListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function WineList() {
  return (
    <WineListStyled>
      {wines.map(wine => (
        <WineCard key={wine.id} {...wine} />
      ))}
    </WineListStyled>
  );
}

export default WineList;
