
import styled from "styled-components";
import { data } from "../data";





const Portfolio = ({ language }:any) => {

  return (
    <Wrapper>
      <ProjectTitleHeader>{language} Projects</ProjectTitleHeader>
      <Div>
        {data
          .filter((item) => item.language === language)
          .map((item) => (
            <>
       
             {item.language==='Native'
             ?
             <ProjectCard>
             <ProjectTitle>{item.name}</ProjectTitle>
             <Image1 src={item.image} />
             <Label>Description</Label>
             <ProjectDescription>{item.description}</ProjectDescription>
             <Label>Responsive</Label>
             <ProjectDescription>{item.responsive}</ProjectDescription>

             <ButtonWrapper>

               <Button href={item.git} target="_blank">
                 See Code
               </Button>
             </ButtonWrapper>
           </ProjectCard>
             : 
             
             <ProjectCard>
              <ProjectTitle>{item.name}</ProjectTitle>
              <Image1 src={item.image} />
              <Label>Description</Label>
              <ProjectDescription>{item.description}</ProjectDescription>
              <Label>Responsive</Label>
              <ResponsiveDescription>{item.responsive}</ResponsiveDescription>

              <ButtonWrapper>
                <Button href={item.link} target="_blank">
                  Visit Web
                </Button>
                <Button href={item.git} target="_blank">
                  See Code
                </Button>
              </ButtonWrapper>
            </ProjectCard>}
            </>
          ))}
      </Div>
    </Wrapper>
  );
};

export default Portfolio;
const Label = styled.h1`
  color: #5f9ea0;
  width: 320px;
  font-size: 19px;
  margin-top: 30px;
  font-family: "Poppins";
  @media (min-width: 950px) {
    width: 790px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const ProjectCard = styled.div`
  background-color: #ecfff9;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  color: #5f9ea0;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 1px;
  padding: 15px 0;
  font-family: "Poppins";
  width: 320px;
  @media (min-width: 950px) {
    width: 790px;
  }
`;

const ProjectDescription = styled.p`
  color: #5f9ea0;
  width: 320px;
  height: 350px;
  font-size: 19px;
  margin-top: 10px;
  font-family: "Poppins";
  opacity: 0.6;
  @media (min-width: 950px) {
    width: 790px;
    height: 150px;
  }
`;
const ResponsiveDescription=styled.p`
    color: #5f9ea0;
  width: 320px;
  font-size: 19px;
  margin-top: 10px;
  font-family: "Poppins";
  opacity: 0.6;
  @media (min-width: 950px) {
    width: 790px;
  }

`

const Image1 = styled.img`
  width: 320px;
  height: 145px;
  border-radius: 5px;
  @media (min-width: 950px) {
    width: 800px;
    height: 450px;
    border-radius: 5px;
  }
`;

const Button = styled.a`
  background-color: #5f9ea0;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #daf7a6;
  font-family: "Poppins";
  text-decoration: none;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  justify-content: center;
`;

const ProjectTitleHeader = styled.h3`
  color: #5f9ea0;
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 1px;
  padding: 15px;
  font-family: "Poppins";
  box-shadow: 30px 30px 30px 30px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  @media (min-width: 950px) {
    font-size: 50px;
  }
`;
