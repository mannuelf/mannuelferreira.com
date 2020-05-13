import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "freight-sans-pro", arial, sans-serif;
    text-align: center;
    background: #F8F8F8;
    color: #444:;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
code {
  font-family: ubuntu-mono, monospace;
}

.main {
  margin: 0 auto;
  width: 90%
}

@media (min-width: 768px) {
  .main {
    width: 50%
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 800
}

h1 {
  font-size: 2rem;
}


`;
