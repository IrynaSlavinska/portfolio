import projects from 'data/projects.js';
import { List, ListItem } from './ProjectsContent.styled';

const ProjectsContent = () => {
  //
  return (
    <List>
      {projects.map(({ id, projectName, type, role, imageSRC }) => {
        return (
          <ListItem key={id}>
            <div>
              <img src={imageSRC} alt={projectName} />
            </div>
            <h2>{projectName}</h2>
            <p>Type: {type}</p>
            <p>Role: {role}</p>
            <button type="button">See more</button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ProjectsContent;
