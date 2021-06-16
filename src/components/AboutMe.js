import React from "react";
import profile from "../assets/profile.jpg";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <div className="left">
        <h2>About me</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          voluptatum inventore deserunt, cum possimus itaque mollitia iste
          labore nam, debitis, numquam tempora iure vitae voluptates ullam
          ipsam. Eaque, nostrum aliquid. Odit sunt, rem neque eligendi similique
          esse ut rerum modi dolores aspernatur. Tempora explicabo quia
          voluptatem quibusdam saepe, est autem similique sit necessitatibus
          provident. Corrupti, odit necessitatibus. Cumque, ullam officia. Minus
          perspiciatis animi, autem blanditiis debitis temporibus, atque quae
          vero unde quibusdam enim, voluptatibus illum minima magnam. Fuga
          ducimus cum earum, repudiandae pariatur officiis aliquam eligendi iure
        </span>
      </div>
      <div className="right">
        <img src={profile} alt="" />
      </div>
    </div>
  );
}
