import { createGlobalStyle } from 'styled-components'
import { gray, red } from './colors';


export const GlobalStyle = createGlobalStyle`

html {
  font: 112.5%/1.45em  'brandon_grotesque_regularRg', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;

  *, *:before, *:after {
    box-sizing: inherit;
  }
}
body {
  margin: 0;
  background: ${gray};

}

 h1, h2 {
   font-family: 'lulo_cleanone_bold', sans-serif;
   margin-top: 0;
   padding: .5rem;
 }

 a {
   color: ${red};
 }

`
