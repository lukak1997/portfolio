import { createGlobalStyle } from "styled-components";
import Image from './assets/photo/background.png'



const GlobalStyles=createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
};

body{
     background-image: url(${Image});
    width:100%;
    background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);
}
`


export default GlobalStyles