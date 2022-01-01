import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  iconColor: "#18191A",
  headLogoColor: "#18191A",
  button: "#18191A",
  footer: "#192734",
  footerColor: "white",
};

export const darkTheme = {
  body: "#192734",
  fontColor: "#fff",
  iconColor: "#E4E6EB",
  headLogoColor: "#E4E6EB",
  button: "#E4E6EB",
  footer: "white",
  footerColor: "black",
};

export const Global = createGlobalStyle`
body {
    background-color:  ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
}
`;
