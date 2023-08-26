import styled from "styled-components";
import git from '../assets/photo/git.png'
import facebook from '../assets/photo/facebook.png'


function Footer() {
    return (
      <MainDiv>
      <Wraper>
       <Git href="https://github.com/lukak1997" target="blank"></Git>
       <Meta href="https://www.facebook.com/luka.khutsidze/" target="blank"></Meta>
       </Wraper>
      </MainDiv>
    );
  }



const MainDiv = styled.div `
 width: 100%;
  height: 90px;
  background-color: #35a29f;
  padding: 0 30px;
gap: 10px;
display: flex;
align-items: center;

  `
;

const Git=styled.a`
    width: 60px;
    height: 60px;
    background-image: url(${git});
    background-repeat: no-repeat;
    text-decoration: none;
    
    

`
const Meta=styled.a`
      width: 60px;
    height: 60px;
    background-image: url(${facebook});
    background-repeat: no-repeat;
    text-decoration: none;
   
`
const Wraper =styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export default Footer