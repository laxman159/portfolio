import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";

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
        <div className="img"></div>
        <div className="details">
          <h3>Project one </h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            reprehenderit eligendi ad, dolor, deleniti tempore quo error quae
            asperiores hic sit dolorem quia nostrum consequatur, dolore iusto.
            Fugiat, officiis enim. Consequuntur distinctio expedita accusamus
            veniam maxime exercitationem fugit modi perferendis itaque sunt a
            in, sit fugiat saepe corrupti illo? Iste quisquam possimus facilis
            cum similique quis quia accusantium iusto earum? Perspiciatis dolore
            distinctio sequi ab, molestiae aperiam exercitationem sit ad
            assumenda adipisci fugit, impedit hic, quaerat dolorum iusto. Atque
            eius ut perferendis fugiat? Nulla dolor quia vitae maxime, alias
          </span>
        </div>
      </div>
      <div className="module ">
        <div className="img"></div>
        <div className="details">
          <h3>Project two</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            reprehenderit eligendi ad, dolor, deleniti tempore quo error quae
            asperiores hic sit dolorem quia nostrum consequatur, dolore iusto.
            Fugiat, officiis enim. Consequuntur distinctio expedita accusamus
            veniam maxime exercitationem fugit modi perferendis itaque sunt a
            in, sit fugiat saepe corrupti illo? Iste quisquam possimus facilis
            cum similique quis quia accusantium iusto earum? Perspiciatis dolore
            distinctio sequi ab, molestiae aperiam exercitationem sit ad
            assumenda adipisci fugit, impedit hic, quaerat dolorum iusto. Atque
            eius ut perferendis fugiat? Nulla dolor quia vitae maxime, alias
          </span>
        </div>
      </div>
      <div className="module ">
        <div className="img"></div>
        <div className="details">
          <h3>Project 3</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            reprehenderit eligendi ad, dolor, deleniti tempore quo error quae
            asperiores hic sit dolorem quia nostrum consequatur, dolore iusto.
            Fugiat, officiis enim. Consequuntur distinctio expedita accusamus
            veniam maxime exercitationem fugit modi perferendis itaque sunt a
            in, sit fugiat saepe corrupti illo? Iste quisquam possimus facilis
            cum similique quis quia accusantium iusto earum? Perspiciatis dolore
            distinctio sequi ab, molestiae aperiam exercitationem sit ad
            assumenda adipisci fugit, impedit hic, quaerat dolorum iusto. Atque
            eius ut perferendis fugiat? Nulla dolor quia vitae maxime, alias
          </span>
        </div>
      </div>
    </div>
  );
}
