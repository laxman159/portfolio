import gsap from "gsap";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import React, { useEffect } from "react";
import Button from "./Button";

export default function LandingPage() {
  var tl = gsap.timeline();
  useEffect(() => {
    tl.to(".hidetext", {
      top: 0,
      color: "white",
      ease: "Power4.easeOut",
      duration: 1.5,
      stagger: 0.2,
    });
    tl.to(".hidetext", {
      color: "black",
    });
    tl.to(".header, .landing-page", { backgroundColor: "white" });
    // tl.to(".landing-page", { backgroundColor: "white" });
    tl.to("h2", { color: "black" });
    tl.fromTo("hr ", { opacity: 0, height: 0 }, { height: "90%", opacity: 1 });
    tl.fromTo(
      ".leftland",
      { opacity: 0, height: 0 },
      { height: "90%", opacity: 1 }
    );
    tl.fromTo(".slide", { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <div className="landing-page">
      <div className="leftland">
        <h1>LS</h1>

        <div className="icons">
          <i>
            <a href="https://github.com/laxman159" target="_blank">
              <AiFillGithub />
            </a>
          </i>
          <i>
            <a href="https://Instagram.com/_lax.man_" target="_blank">
              <AiOutlineInstagram />
            </a>
          </i>
          <i>
            <a
              href="https://www.linkedin.com/in/laxman-sharma-360791145/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </i>
        </div>
      </div>
      <hr />

      <div className="rightland">
        <h2>
          <span className="hidetext ">I am Laxman,</span>
        </h2>
        <h2>
          <span className="hidetext">I am a UI/UX designer during daytime</span>
        </h2>
        <h2>
          <span className="hidetext">& developer by nights.</span>
        </h2>
        <h2>
          <span className="hidetext">
            <Button text="Portfolio" />
          </span>
        </h2>
      </div>
    </div>
  );
}
