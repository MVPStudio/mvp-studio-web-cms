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
    transform-origin: 49% 39%;
    transition: 0.5s;
    animation: ${rotate} 7s linear infinite;
    animation-play-state: paused;
  }
  :hover > .gear {
    animation-play-state: running;
    fill: ${red};
  }
`;
