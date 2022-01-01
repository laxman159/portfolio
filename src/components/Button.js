import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
export default function Button({ text }) {
  const Button = styled.button`
    border: solid 1px ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.body};
    width: 100px;
    height: 40px;
    margin-top: 50px;
    font-size: 1rem;
    color: ${(props) => props.theme.fontColor};
    transition: all 0.5s ease-in-out;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    :before {
      content: "";
      background-color: ${(props) => props.theme.fontColor};
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      transition: transform 0.5s;
    }
    :hover:before {
      color: white;
      transform: translateX(0);
    }
    :hover {
      color: black;
    }
  `;

  const HashLinks = styled(HashLink)`
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    z-index: 10;

    :hover {
      color: ${(props) => props.theme.body};
    }
  `;
  return (
    <Button>
      <HashLinks to='#projects' smooth>
        {text}
      </HashLinks>
    </Button>
  );
}
