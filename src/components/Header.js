import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

const HeaderComponent = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: ${(props) => props.theme.body};

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-bottom: 0.2px solid white;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HashLinkComponent = styled(HashLink)`
  text-decoration: none;
  color: black;
`;

const Li = styled.li`
  list-style: none;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 10px;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export default function Header({ themeToggle, theme }) {
  return (
    <HeaderComponent>
      <Ul>
        <HashLinkComponent to='#lp' smooth>
          <Li>Home</Li>
        </HashLinkComponent>
        <HashLinkComponent to='#sk' smooth>
          <Li>Projects</Li>
        </HashLinkComponent>
        <HashLinkComponent to='#am' smooth>
          <Li>About</Li>
        </HashLinkComponent>
        <HashLinkComponent to='#contact' smooth>
          <Li>Contact</Li>
        </HashLinkComponent>
        <DarkModeToggle
          size={35}
          onChange={themeToggle}
          checked={theme === "light" ? false : true}
        />
      </Ul>
    </HeaderComponent>
  );
}
