import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    background-color:#E5E5E5;
    width:100%;
    height:100%;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  :root {
  --ft-style:Poppins;
  --pri-color: #E3562A;
  --sec-color: #5BA092;
  --bg-color:#FFFF;
  --font-size:62%;
  --pri-text-color:#3c3a36;
  --sec-text-color: #4f4f4f;
}
`;

export default GlobalStyle;
