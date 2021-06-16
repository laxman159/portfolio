import React from "react";
import { FaTools } from "react-icons/fa";
import { GiSpiderWeb, GiNinjaHeroicStance } from "react-icons/gi";

export default function Skills() {
  return (
    <div className="skills">
      <h1>What do I do?</h1>
      <div className="cards">
        <div className="card">
          <span>
            <FaTools />
          </span>
          <h3 className="tit">UI/UX</h3>
          <h3>
            I love front-end development and my primary goal in life is the be a
            UI/UX designer, there is something special in making beautiful
            thinks pleasent to the eye and amazing to use, i'm constantly
            learning new things every day I may not have a lot of work
            experience but wherever I do I give it my 110%.
          </h3>
        </div>
        <div className="card">
          <span>
            <GiSpiderWeb />
          </span>
          <h3>Web Development</h3>
          <h3>
            This is one aspect of programming which always keeps on changing and
            improving, and I cant seem to refrain myself from learning new web
            dev technologies be it React with Server Side Rendering (which is a
            pain in the ass sometimes), therefore love NextJs, but HTML, CSS and
            JavaScript with always be my bread and butter.
          </h3>
        </div>
        <div className="card">
          <span>
            <GiNinjaHeroicStance />
          </span>
          <h3>And a whole bunch of things</h3>
          <h3>
            Be it WebGl, ThreeJs, Android, Flutter, React Native, Blender, i've
            tried them all and i'm constantly learning building up my skills,
            making beautiful things and in the process improving UI/UX skills,
            i'm also a gamer love to play and analyze games, we can get
            inspiration from all kinds of things if we look closely.
          </h3>
        </div>
      </div>
    </div>
  );
}