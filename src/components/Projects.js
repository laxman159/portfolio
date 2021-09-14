import { Portfolio, RestaurantBackend, ShillongChoice, TheDept } from "../data";

import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  return (
    <div className="project_container">
      <h2>Projects</h2>
      <ProjectDetails prop={TheDept} />
      <ProjectDetails isReverse={true} prop={ShillongChoice} />
      <ProjectDetails prop={RestaurantBackend} />
      <ProjectDetails isReverse={true} prop={Portfolio} />
      <div className="buo">
        <a href="https://github.com/laxman159" target="_blank">
          <button className="contact-btn" type="submit">
            More Projects &rarr;
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
