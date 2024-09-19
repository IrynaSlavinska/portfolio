import projects from 'data/projects.js';
import { List, ListItem } from './ProjectsContent.styled';

const ProjectsContent = () => {
  //
  return (
    <List>
      {projects.map(({ id, projectName, type, role }) => {
        return (
          <ListItem key={id}>
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
