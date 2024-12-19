import {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: none;
  }

  body{
    background: ${(props) => props.theme.COLORS.gray900};
    color: ${(props) => props.theme.COLORS.gray300};
  /*   -webkit-font-smoothing: antialiased; */
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`
