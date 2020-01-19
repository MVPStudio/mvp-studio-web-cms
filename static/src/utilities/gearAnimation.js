import { css, keyframes } from 'styled-components';
import { red } from './colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const gearAnimation = css`
  .gear {
    transform-origin: 50% 50%;
    transition: 0.5s;
    animation: ${rotate} 7s linear infinite;
    animation-play-state: paused;
    fill: white;
  }
  :hover .gear, :hover h3{
    animation-play-state: running;
    fill: ${red};
  }
`;
