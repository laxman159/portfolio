import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Skills />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
