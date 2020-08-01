import { createGlobalStyle } from 'styled-components';
import backImage from '../assets/backImage.png'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  

  html, box-sizing, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--primary) url(${backImage}) no-repeat center;
    background-size: 80%;

    @media(max-width: 880px) {
      background: var(--primary);
    }
  }

  :root {
    --primary: #02162E;
    --multi: #0564A5;
    --white: #fff;
  }
`;