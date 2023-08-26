import styled from "styled-components";
import person from "../assets/photo/photo.png";
function Card() {
  return (
    <MainDiv>
      <LeftDiv>
        <Image src={person} />
        <Wrap>
        <MainInfo>
          <Infos>Name : Luka</Infos>
          <Infos>Surname : Khutsidze</Infos>
          <Infos>Birthday :1997/08/24</Infos>
          <Infos>Mobile Number : 4437888838</Infos>
          <Infos>Email: khutsidzeluka@gmail.com</Infos>
        </MainInfo>
        </Wrap>
      </LeftDiv>
      <RightDiv>
        {" "}
        <Title>About Me </Title>
        <Description>
          Hello there! I am Luka, a React JS/Native developer with practical
          experience creating interactive, user-centered web and mobile
          applications. I can build responsive and captivating user interfaces
          that improve user interactions using the React framework. Proficient
          in guaranteeing seamless cross-platform compatibility, optimizing app
          speed, and writing efficient and modular code.
        </Description>
        <Description>
        I believe I am an
          effective communicator who works well with designers and backend
          engineers to provide integrated end-to-end solutions. I am really
          interested in keeping up with the newest business trends and ideal
          procedures. I'm prepared to contribute my abilities and ingenuity to
          advance projects that promote innovative development.
        </Description>
        <Description>
        It is important
          to note that I successfully finished about 25 projects that covered a
          variety of industries and functionalities. The projects showcased
          flexibility and adaptability in developing solutions to satisfy
          various client objectives. They featured mobile applications, online
          interfaces, and interactive elements.
        </Description>
      </RightDiv>
    </MainDiv>
  );
}

export default Card;

const MainDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: flex-start;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
`;
const LeftDiv = styled.div`
  width: 300px;
  display: flex;

  flex-direction: column;
justify-content: center;
align-items: center;
  @media (min-width: 768px) {
  
  }
`;
const RightDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (min-width: 768px) {
    width: 50%;
  
  }
`;
const Wrap=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MainInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 10px;
  color: #35a29f;
  margin-top: 20px;
  border-radius: 20px;
  font-family: "Poppins";
  font-size: 13px;


`;
const Infos = styled.li`


`;

const Title = styled.h1`
  color: #35a29f;
  font-size: 30px;
  font-weight: 900;
`;
const Description = styled.h2`
  font-size: 13px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 1px;
  font-family: "Poppins";
  color: #35a29f;
  opacity: 0.6;
  border: 1px solid #35a29f;
  padding: 10px;
  text-align: center;
`;
