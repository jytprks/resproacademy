import { createGlobalStyle } from 'styled-components';
// typography
// import '@fontsource/poppins';
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/600.css';
// import '@fontsource/poppins/700.css';
// import '@fontsource/poppins/800.css';


const GlobalStyles = createGlobalStyle`
:root{
    /* colors */
    --dark-blue: #2F3A8F;
    --light-blue: #3D2C8D;
    --orange: #FE7E6D;
    --light-gray: #CCD1E4;
    --light: #FEECE9;
    --white: #FFFFFF;
    --black: #000000;
    /* others */
      --header-height: 50px;
  }
  html{
      font-size: 10px
  }
  body{
      background-color: var(--white);
      font-family: 'Montserrat', sans-serif;
  }
  *, *::after, *::before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  a{
      text-decoration: none;
      cursor: pointer;
  }

  user-select,li{
      list-style: none;
  }
  .container{
      max-width: 1200px;
      width: 90%;
      margin: 0 auto;
  }
  img,svg{
      width: 100%;
      height: 100%;
  }
`;
export default GlobalStyles;
