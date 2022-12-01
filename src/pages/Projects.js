import Project from '../components/Project/Project';
import {projects} from '../helpers/projectsList';

const Projects = () => (
  <main className="section">
    <div className="container">
      <h2 className="title-1">Projects</h2>
      <ul className="projects">
        {
          // eslint-disable-next-line arrow-body-style
          projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />);
          })
        }
      </ul>
    </div>
  </main>
);

export default Projects;
