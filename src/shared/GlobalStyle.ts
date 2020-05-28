import {createGlobalStyle} from 'styled-components';

export const theme = {
  color: {
    black: "#000000",
    smokeyBlack: "#111111",
    eerieBlack: "#222222",
    jet: "#333333",
    blackOlive: "#444444",
    graniteGray: "#666666",
    spanishGray: "#999999",
    white: "#FFFFFF",
    spaceCadetDark: "#28284F",
    spaceCadet: "#2D2B56",
    hanPurple: "#5E36F4",
    lightestGrey: "#F8F8F8",
    cultured: "#E1EFFF",
    violetWeb: "#F894FC",
    brinkPink: "#F5628D",
    celeste: "#9EFEFE"
  },
  screens: {
    mobile: "320px",
    tablet: "767px",
    laptop: "1025px",
    desktop: "1280px"
  },
  space: {
    'one': '8px',
    'two': '12px',
    'three': '16px',
    'four': '24px',
    'five': '32px',
    'six': '48px',
  },
  font: {
    primary: "freight-sans-pro",
    secondary: "arial, sans-serif"
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font.primary},${theme.font.secondary};
    text-align: center;
    background: ${theme.color.lightestGrey};
    color: ${theme.color.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: ubuntu-mono, monospace;
  }

  .container {
    margin: 0 auto;
    max-width: 1070px;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 800
  }

  h1 {
    font-size: 2rem;
  }

  p {
    line-height: 24px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer"
  }

  .app-footer {
    background: ${theme.color.spaceCadetDark};
    color: ${theme.color.lightestGrey};

    & a {
      color: ${theme.color.lightestGrey}
    }

    .container {
      padding-top: ${theme.space.five};
      padding-bottom: ${theme.space.five};


    }
  }
`;
