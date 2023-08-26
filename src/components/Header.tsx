import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/photo/icons8-portfolio-80.png";
import rect from "../assets/photo/Rectangle.png";
import { useState } from "react";

function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <MainDiv>
      <StyleLink to="/">
        <WrapperDiv>
          <Logo />
          <LogoText>Portfolio</LogoText>
        </WrapperDiv>
      </StyleLink>
      <TitileDiv>
        <StyleLink to="/">
          <PageTitle>Home</PageTitle>
        </StyleLink>
        <StyleLink to="/reactjs">
          <PageTitle>React Js</PageTitle>
        </StyleLink>
        <StyleLink to="/reactnative">
          <PageTitle>React Native</PageTitle>
        </StyleLink>
        <StyleLink to="/dom">
          <PageTitle>JavaScript</PageTitle>
        </StyleLink>
      </TitileDiv>
      <RectDiv
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <Rect src={rect} />
        <Rect src={rect} />
        <Rect src={rect} />
      </RectDiv>
      {visible && (
        <Menu>
          <StyleLink to="/">
            <ManuTitle
              onClick={() => {
                setVisible(!visible);
              }}
            >
              Home
            </ManuTitle>
          </StyleLink>
          <StyleLink to="/reactjs">
            <ManuTitle
              onClick={() => {
                setVisible(!visible);
              }}
            >
              React Js
            </ManuTitle>
          </StyleLink>
          <StyleLink to="/reactnative">
            <ManuTitle
              onClick={() => {
                setVisible(!visible);
              }}
            >
              React Native
            </ManuTitle>
          </StyleLink>
          <StyleLink to="/dom">
            <ManuTitle
              onClick={() => {
                setVisible(!visible);
              }}
            >
              JavaScript
            </ManuTitle>
          </StyleLink>
        </Menu>
      )}
    </MainDiv>
  );
}

export default Header;
const Menu = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffffb5;
  background-image: linear-gradient(315deg, #ffffb5 , #24a093 54%);
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 850px) {
    display: none;
  }
`;
const ManuTitle = styled.h1`
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
  :hover {
    color: #c0eef2;
    cursor: pointer;
  }
`;

const Rect = styled.img``;
const RectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  @media (min-width: 850px) {
    display: none;
  }
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${logo});
`;

const MainDiv = styled.div`
  width: 100%;
  height: 90px;
  background-color: #35a29f;
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  position: relative;
`;

const LogoText = styled.h1`
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 2px;
  color: white;
  :hover {
    color: #c0eef2;
    cursor: pointer;
  }
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
  :hover {
    color: #c0eef2;
    cursor: pointer;
  }
`;

const TitileDiv = styled.div`
  display: none;
  @media (min-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  @media (min-width: 1200px) {
    margin-right: 150px;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
