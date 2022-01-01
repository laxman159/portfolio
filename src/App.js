import { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style/main.scss";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, Global, lightTheme } from "./theme";

const MainComponent = styled.div``;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    const themeupdate = theme === "light";
    localStorage.setItem("darkmode", themeupdate ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkmode");
    console.log(savedTheme);

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Global></Global>
      <MainComponent>
        <Header theme={theme} themeToggle={themeToggle} />
        <div className='App'>
          <div id='lp'>
            <LandingPage />
          </div>
          <div id='sk'>
            <Skills />
          </div>
          <div id='projects'>
            <Projects />
          </div>
          <div id='am'>
            <AboutMe />
          </div>
          <div id='contact'>
            <ContactForm />
          </div>
          <Footer />
        </div>
      </MainComponent>
    </ThemeProvider>
  );
}

export default App;
