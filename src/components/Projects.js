import { Portfolio, RestaurantBackend, ShillongChoice, TheDept } from "../data";
import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

import ProjectDetails from "./ProjectDetails";
import styled from "styled-components";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project_container",
        start: "-230px top",
        // scrub: 1,
        stagger: 0.1,
        // markers: true,
        scrub: true,
        ease: "easeOut",
      },
    });
    tl.fromTo(
      ".container",
      {
        // opacity: 0,
        // stagger: 0.2,
        scale: ".5",
      },
      {
        // duration: 1,
        stagger: 0.2,
        // opacity: 1,
        scale: "1",
      }
    );
    tl.to("h3,span", { opacity: 1, duration: 0.3 });
  }, []);

  const ProjectContaienr = styled.div``;

  const Header = styled.h2`
    text-align: center;
    font-size: 4rem;
  `;
  const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `;
  const Anchor = styled.a`
    margin-top: -160px;

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  `;
  const Button = styled.button`
    background-color: ${(props) => props.theme.body};
    /* box-shadow: rgb(5, 5, 5) 0px 0px 0px 3px; */

    cursor: pointer;
    width: 300px;
    height: 40px;
    margin-top: 120px;
    margin-bottom: 100px;
    color: ${(props) => props.theme.fontColor};
    border: 1px solid ${(props) => props.theme.fontColor};
    font-size: 1.5rem;

    @media (max-width: 768px) {
      width: 200px;
      height: 40px;
      background-color: white;

      border: none;
      font-size: 1rem;
    }
  `;
  return (
    <ProjectContaienr className='project_container'>
      <Header>Projects</Header>
      <div className='trigger'>
        <ProjectDetails prop={TheDept} />
      </div>
      <div className='trigger'>
        <ProjectDetails isReverse={true} prop={Portfolio} />
      </div>
      <div className='trigger'>
        <ProjectDetails prop={RestaurantBackend} />
      </div>
      <div className='trigger'>
        <ProjectDetails isReverse={true} prop={ShillongChoice} />
      </div>
      <ButtonContainer className='buo'>
        <Anchor href='https://github.com/laxman159' target='_blank'>
          <Button className='contact-btn' type='submit'>
            More Projects &rarr;
          </Button>
        </Anchor>
      </ButtonContainer>
    </ProjectContaienr>
  );
};

export default Projects;
