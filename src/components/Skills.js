import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FaTools } from "react-icons/fa";
import { GiSpiderWeb, GiNinjaHeroicStance } from "react-icons/gi";
import styled from "styled-components";

export default function Skills() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".skills",
  //       start: "-100px top",
  //       // scrub: 1,
  //       // markers: true,
  //       // scrub: 0.001,
  //       ease: "Power1.inOut",
  //     },
  //   });
  //   tl.to(".card", {
  //     opacity: 1,
  //     stagger: 0.2,
  //     duration: 1,
  //     width: "auto",
  //   });
  //   tl.to("h3,span", { opacity: 1, duration: 0.3 });
  // }, []);

  const Skills = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 150px;
  `;
  const Heading = styled.h1`
    font-size: 3rem;
  `;

  const Cards = styled.div`
    width: 90%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;
  `;

  const Card = styled.div`
    /* opacity: 0; */
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    width: auto;
    padding: 20px;
    overflow: hidden;
    height: auto;
    border: 1px solid;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px; */
  `;
  const Title = styled.h3`
    font-size: 2rem;
  `;
  const Details = styled.h3`
    margin-top: 20px;
    color: white;
    font-size: 1rem;
  `;
  const Icon = styled.span`
    font-size: 2rem;
  `;

  return (
    <Skills>
      <Heading>What do I do?</Heading>
      <Cards>
        <Card>
          <Icon>
            <FaTools />
          </Icon>
          <Title>UI/UX</Title>
          <h3>
            I love front-end development and my primary goal in life is the be a
            UI/UX designer, there is something special in making beautiful
            things pleasent to the eye and amazing to use, i'm constantly
            learning new things every day I may not have a lot of work
            experience but wherever I do I give it my 110%.
          </h3>
        </Card>
        <Card>
          <Icon>
            <GiSpiderWeb />
          </Icon>
          <Title>Web Development</Title>
          <h3>
            This is one aspect of programming which always keeps on changing and
            improving, and I cant seem to refrain myself from learning new web
            dev technologies be it React with Client Side Rendering (which is a
            pain in the ass sometimes), therefore love NextJs, but HTML, CSS and
            JavaScript with always be my bread and butter.
          </h3>
        </Card>
        <Card>
          <Icon>
            <GiNinjaHeroicStance />
          </Icon>
          <Title>A whole bunch of things</Title>
          <h3>
            Be it WebGl, ThreeJs, Android, Flutter, React Native, Blender, i've
            tried them all and i'm constantly learning building up my skills,
            making beautiful things and in the process improving UI/UX skills,
            i'm also a gammer love to play and analyze games, we can get
            inspiration from all kinds of things if we look closely.
          </h3>
        </Card>
      </Cards>
    </Skills>
  );
}
