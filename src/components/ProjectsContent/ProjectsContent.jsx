import projects from 'data/projects.js';
import { IconContext } from 'react-icons';
import { VscGithub } from 'react-icons/vsc';
import { VscPreview } from 'react-icons/vsc';
import {
  List,
  ListItem,
  ImageContainer,
  CardImage,
  LinkOut,
  CardTitle,
} from './ProjectsContent.styled';

const ProjectsContent = () => {
  //
  return (
    <List>
      {projects.map(
        ({
          id,
          projectName,
          type,
          role,
          imageSRC,
          github,
          livepage,
          description,
        }) => {
          return (
            <ListItem key={id}>
              <ImageContainer>
                <CardImage src={imageSRC} alt={projectName} />
              </ImageContainer>
              <CardTitle>{projectName}</CardTitle>
              <LinkOut href={github} target="_blank" rel="noopener noreferrer">
                <IconContext.Provider
                  value={{ color: '#8ce436', size: '20px' }}
                >
                  <VscGithub />
                </IconContext.Provider>
                GitHub Repository
              </LinkOut>
              <LinkOut
                href={livepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ color: '#8ce436', size: '20px' }}
                >
                  <VscPreview />
                </IconContext.Provider>{' '}
                Live Page
              </LinkOut>
              <p>Type: {type}</p>
              <p>Role: {role}</p>
              <p>Technologies: </p>
              <p>Description: {description}</p>
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default ProjectsContent;
