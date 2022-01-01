import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export default function Footer() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "-450px top",
        // scrub: 1,
        // markers: true,
        // scrub: 0.001,
        ease: "Power1.inOut",
      },
    });
    tl.to(".footer", {
      opacity: 1,
      stagger: 0.2,
      duration: 1,
    });
  }, []);

  const FooterContainer = styled.div`
    height: 80vh;
    display: flex;
    align-items: flex-end;
    background-color: ${(props) => props.theme.footer};
    color: ${(props) => props.theme.body};
    justify-content: flex-start;
    /* opacity: 0; */
    @media (max-width: 768px) {
      height: 70vh;
      flex-direction: column;
    }
  `;
  const Content = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 768px) {
      height: 60vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  `;

  const Left = styled.div`
    transform: rotate(-90deg);
    margin-left: -30px;
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
      display: flex;
      justify-content: center;
      transform: rotate(0deg);
    }
  `;

  const LeftInner = styled.h2`
    font-size: 3rem;
    /* color: white !important; */
    @media (max-width: 768px) {
      font-size: 2rem;
      letter-spacing: 10px;
    }
  `;

  const Middle = styled.div`
    width: 70%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      width: auto;
      padding: 10px;
      text-align: center;
    }
  `;

  const Span = styled.span`
    width: 70%;
    font-size: 3.5rem;
    @media (max-width: 768px) {
      width: 70%;
      font-size: 1.5rem;
      letter-spacing: 3px;
    }
  `;
  const HR = styled.hr`
    width: 110%;
    margin-top: 40px;
    /* color: black; */
    @media (max-width: 768px) {
      width: 90%;
      margin-top: 40px;
    }
  `;
  const Right = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const HashLinks = styled(HashLink)`
    text-decoration: none;
    color: ${(props) => props.theme.footerColor};
    margin-top: 10px;
  `;

  return (
    <FooterContainer>
      <Content>
        <Left>
          <LeftInner>LAXMAN.</LeftInner>
        </Left>

        <Middle>
          <Span>You only have one chance to make a first impression.</Span>
          <br />
          <Span>Lets make it good</Span>
          <HR />
        </Middle>
        <Right>
          <h3>Navigation</h3>
          <HashLinks to='#lp' smooth>
            <span>Home</span>
          </HashLinks>
          <HashLinks to='#sk' smooth>
            <span>Projects</span>
          </HashLinks>
          <HashLinks to='#am' smooth>
            <span>About Me</span>
          </HashLinks>
        </Right>
      </Content>
    </FooterContainer>
  );
}
