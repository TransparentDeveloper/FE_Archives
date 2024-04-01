import { createGlobalStyle } from 'styled-components'
import '../../assets/fonts/index.css'
import { COLORS, FONT_SIZE } from '../../consts/design-token'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: ${FONT_SIZE.MD};
    font-family: 'SKYBORI';
    color: ${COLORS.GSCALE[0]};
  }
  html{
    background-color: ${COLORS.GSCALE[0]};
    color: ${COLORS.GSCALE[600]};
    font-size: 62.5%;
  }
  h1 {
    font-size: ${FONT_SIZE.HUGE};
  }
  h2 {
    font-size: ${FONT_SIZE.BIG};
  }
  h3 {
    font-size: ${FONT_SIZE.LG};
  }
  button {
    border: none;
  }
  input {
    outline: none;
  }  
  ul, li {
    list-style: none;
  }
`

export default GlobalStyles
