import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import Project1 from "../assets/Project1.png";

export default function Projects() {
  useEffect(() => {
    let container = document.getElementById("container");
    let sections = gsap.utils.toArray(".module");

    // console.log(container);
    gsap.to(".module", {
      xPercent: -100 * (sections.length - 1),
      // x: () =>
      //   -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",

      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);

  return (
    <div id="container" className="project-container">
      <div className="module ">
        <div className="img">
          <img src={Project1} alt="" />
        </div>
        <div className="details">
          <a href="http://shillong-choice.herokuapp.com/" target="_blank">
            <h3>Shillong Choice</h3>
          </a>

          <span>
            A full stack website made for a student project
            <ul>
              Technology Used
              <br />
              <li>React</li>
              <li>Nodejs</li>
              <li>MongoDb</li>
              <li>Express</li>
              <li>Redux</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="module ">
        <div className="img">
          <img
            src="https://user-images.githubusercontent.com/56950807/104883203-6e8c9d00-598a-11eb-9c80-c86d0000feda.png"
            alt=""
          />
        </div>
        <div className="details">
          <a
            href="https://github.com/laxman159/departmental-social-app"
            target="_blank"
          >
            <h3>The Dept</h3>
          </a>

          <span>
            A firebase social network made for the departments of every college
            with focus towards the educational aspect rather then the social
            aspect.
            <ul>
              Technology Used
              <br />
              <li>Firebase</li>
              <li>Java</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="module module3 ">
        <a href="https://github.com/laxman159" target="_blank">
          View All Projects
        </a>
      </div>
    </div>
  );
}
