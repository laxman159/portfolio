import gsap from "gsap";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import React, { useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";

export default function LandingPage() {
  var tl = gsap.timeline();
  // useEffect(() => {
  //   tl.to(".hidetext", {
  //     top: 0,
  //     color: "white",
  //     ease: "Power4.easeOut",
  //     duration: 1.5,
  //     stagger: 0.2,
  //   });
  //   tl.to(".hidetext", {
  //     color: "black",
  //   });
  //   tl.to(".header, .landing-page", { backgroundColor: "white" });
  //   // tl.to(".landing-page", { backgroundColor: "white" });
  //   tl.to("h2", { color: "black" });
  //   tl.fromTo("hr ", { opacity: 0, height: 0 }, { height: "90%", opacity: 1 });
  //   tl.fromTo(
  //     ".leftland",
  //     { opacity: 0, height: 0 },
  //     { height: "90%", opacity: 1 }
  //   );
  //   tl.fromTo(".slide", { opacity: 0 }, { opacity: 1 });
  // }, []);

  const LandingPage = styled.div`
    width: auto;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.body};
  `;
  const LeftLand = styled.div`
    width: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;

    @media (max-width: 768px) {
      width: 20%;
      height: 90%;
    }
  `;
  const Head = styled.h1`
    font-size: 2rem;
    color: ${(props) => props.theme.headLogoColor};

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  `;
  const Icons = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  `;
  const I = styled.i`
    width: auto;
    height: auto;
    opacity: 0.5;
    font-size: 2rem;

    @media (max-width: 768px) {
      width: auto;
      height: auto;
      opacity: 0.5;
      font-size: 2rem;
    }
    :hover {
      opacity: 1;
    }
  `;

  const A = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.iconColor};
  `;
  const RightLand = styled.div`
    width: 90%;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const H2 = styled.div`
    height: 60px;
    width: 80vw;
    /* overflow: hidden; */
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    /* margin-top: -65px; */
    color: ${(props) => props.theme.fontColor};
    @media (max-width: 768px) {
      font-size: 0.9rem;
      height: 30px;
    }
  `;

  const HideText = styled.span`
    /* position: absolute;
    top: 100px;
    z-index: 200; */
  `;

  return (
    <LandingPage>
      <LeftLand>
        <Head>LS</Head>

        <Icons>
          <I>
            <A href='https://github.com/laxman159' target='_blank'>
              <AiFillGithub />
            </A>
          </I>
          <I>
            <A href='https://Instagram.com/_lax.man_' target='_blank'>
              <AiOutlineInstagram />
            </A>
          </I>
          <I>
            <A
              href='https://www.linkedin.com/in/laxman-sharma-360791145/'
              target='_blank'
            >
              <AiFillLinkedin />
            </A>
          </I>
        </Icons>
      </LeftLand>
      <hr />

      <RightLand>
        <H2>
          <HideText className='hidetext '>I am Laxman,</HideText>
        </H2>
        <H2>
          <HideText className='hidetext'>
            I am a UI/UX designer during daytime
          </HideText>
        </H2>
        <H2>
          <HideText className='hidetext'>& developer by nights.</HideText>
        </H2>
        <H2>
          <HideText className='hidetext'>
            <Button text='Portfolio' />
          </HideText>
        </H2>
      </RightLand>
    </LandingPage>
  );
}
