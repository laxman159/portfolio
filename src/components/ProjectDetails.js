/* eslint-disable react/jsx-no-target-blank */
import styled from "styled-components";
const ProjectDetails = ({ prop, isReverse }) => {
  const Container = styled.div`
    height: auto;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 100px;
    margin-left: 100px;
    margin-right: 100px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 0 20px;
    border: 1px solid ${(props) => props.theme.fontColor};
    /* overflow: hidden; */
    @media (max-width: 768px) {
      flex-direction: column;
      box-shadow: none;
      margin-bottom: 0;
    }
    :hover {
      box-shadow: none;
    }
  `;
  const ImageContainer = styled.div`
    padding: 10px;
    @media (max-width: 768px) {
      padding: 10px;
    }
  `;
  const Img = styled.img`
    width: 450px;
    height: 250px;

    @media (max-width: 768px) {
      width: 350px;
      height: 200px;
    }
  `;
  const Details = styled.div`
    background-color: ${(props) => props.theme.body};
    width: 600px;
    height: auto;
    margin-top: 10px;
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 90vw;
      height: auto;
      align-items: center;
      justify-content: center;
    }
  `;
  const Title = styled.h3`
    font-size: 2rem;
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
    @media (max-width: 768px) {
      font-size: 2rem;
      width: 100%;
      text-align: center;
      letter-spacing: 2px;
    }
  `;
  const Brief = styled.span`
    padding: 0 5px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    @media (max-width: 768px) {
      padding: 0 5px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
    }
  `;
  const List = styled.span`
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-left: 5px;
    letter-spacing: 1px;
    @media (max-width: 768px) {
      list-style: none;
      display: flex;
      flex-direction: row;
      margin-left: 5px;
      letter-spacing: 1px;
    }
  `;
  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
    width: 100%;
    padding: 0 5px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 10px;
      width: 100%;
      padding: 0 5px;
      margin-bottom: 20px;
    }
  `;
  const Anchor = styled.a`
    width: 200px;
    height: 35px;
    background-color: black;
    margin-right: 20px;
  `;
  const Button = styled.button`
    width: 100%;
    height: 35px;
    margin-right: 0px;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
  `;
  return (
    <Container
      className={+isReverse ? "container containerReverse" : "container"}
    >
      <ImageContainer className='img'>
        <Img src={prop.img} alt='' />
      </ImageContainer>
      <Details>
        <Title>{prop.name}</Title>
        {/* <a href="http://shillong-choice.herokuapp.com/" target="_blank">
          LAxman
        </a> */}
        <Brief>{prop.details}</Brief>
        <List>Technology Used: {prop.techUsed} </List>
        <ButtonContainer className='button'>
          <Anchor href={prop.gitUrl} target='_blank'>
            <Button>Code</Button>
          </Anchor>
          {prop.liveUrl ? (
            <Anchor href={prop.liveUrl} target='_blank'>
              <Button>Live</Button>
            </Anchor>
          ) : (
            ""
          )}
        </ButtonContainer>
      </Details>
    </Container>
  );
};

export default ProjectDetails;
