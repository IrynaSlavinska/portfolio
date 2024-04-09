import projects from 'data/projects.json';
import { List } from './ProjectsContent.styled';

const ProjectsContent = () => {
  //
  console.log(projects);
  return (
    <List>
      {projects.map(project => {
        return (
          <li key={project.id}>
            {/* <img src={project.imageSRC} alt={project.projectName} /> */}
            <h2>{project.projectName}</h2>
            <p>Type: {project.type}</p>
            <p>Role: {project.role}</p>
            <button type="button">See more</button>
          </li>
        );
      })}
    </List>
  );
};

export default ProjectsContent;
