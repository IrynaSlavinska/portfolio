import webStudio from 'assets/images/web-studio.JPG';
import simplyChocolate from 'assets/images/simply-chocolate.JPG';
import veggieBoost from 'assets/images/veggieboost.JPG';
import yourEnergy from 'assets/images/your-energy.JPG';
import moviesGallery from 'assets/images/movies-gallery.JPG';
import emptyPicture from 'assets/images/empty-picture.JPG';
import taskPro from 'assets/images/task-pro.JPG';

const projects = [
  {
    id: 1,
    projectName: 'WEB Studio',
    github: 'https://github.com/IrynaSlavinska/goit-markup-hw-06',
    livepage: 'https://irynaslavinska.github.io/goit-markup-hw-06/',
    technologies: ['HTML', 'CSS', 'Java Script'],
    role: 'Developer',
    type: 'Individual project',
    part: 'Whole project',
    imageSRC: webStudio,
    description:
      'Landing page for web development studio with responsive design for different screens.',
  },
  {
    id: 2,
    projectName: 'Simply Chocolate',
    github: 'https://github.com/IrynaSlavinska/simply_chocolate',
    livepage: 'https://irynaslavinska.github.io/simply_chocolate/',
    technologies: ['HTML', 'CSS', 'Java Script'],
    role: 'Developer',
    type: 'Individual project',
    part: 'Whole project',
    imageSRC: simplyChocolate,
    description:
      'Landing page for chocolate workshop with responsive design for different screens.',
  },
  {
    id: 3,
    projectName: 'Veggieboost',
    github: 'https://github.com/IrynaSlavinska/project-OurDreamTeam',
    livepage: 'https://irynaslavinska.github.io/project-OurDreamTeam/',
    technologies: ['HTML', 'CSS', 'Java Script', 'Vite'],
    role: 'Team Lead, Developer',
    type: 'Team project',
    part: '3 easy steps...',
    imageSRC: veggieBoost,
    description:
      'Website with an adaptive layout for shop with organic products.',
  },
  {
    id: 4,
    projectName: 'Your Energy',
    github: 'https://github.com/konstantin-it-lysenko/projectDreamTeamJS',
    livepage: 'https://konstantin-it-lysenko.github.io/projectDreamTeamJS/',
    technologies: ['HTML', 'CSS', 'Java Script', 'Vite'],
    libraries: ['axios', 'Notiflix', 'BasicLightbox', 'Lodash'],
    role: 'Developer',
    type: 'Team project',
    part: 'Hero section, Devs modal',
    imageSRC: yourEnergy,
    description:
      "'Your Energy' is a web application dedicated to promoting physical well-being by offering affordable and effective workout solutions. The platform is designed to provide accessible and user-firendly fitness resources to help individuals maintain a healthy and active lifestyle.",
  },
  {
    id: 5,
    projectName: 'Movies Gallery',
    github: 'https://github.com/IrynaSlavinska/goit-react-hw-05-movies',
    livepage: 'https://irynaslavinska.github.io/goit-react-hw-05-movies/',
    technologies: ['React.js', 'Styled components'],
    libraries: [
      'axios',
      'react-router-dom',
      'emotion/styled',
      'react-icons',
      'react-loader-spinner',
    ],
    role: 'Developer',
    type: 'Individual project',
    part: 'Whole project',
    imageSRC: moviesGallery,
    description: '',
  },
  {
    id: 6,
    projectName: 'Phonebook',
    github: 'https://github.com/IrynaSlavinska/goit-react-hw-08-phonebook',
    livepage: 'https://irynaslavinska.github.io/goit-react-hw-08-phonebook/',
    technologies: ['React.js', 'Styled components', 'Redux Toolkit'],
    libraries: [
      'axios',
      'react-router-dom',
      'emotion/styled',
      'react-icons',
      'react-loader-spinner',
      'notiflix',
      'reduxjs/toolkit',
      'redux-persist',
    ],
    role: 'Developer',
    type: 'Individual project',
    part: 'Whole project',
    imageSRC: emptyPicture,
    description:
      'An app was developed to provide users with a convenient platform for saving contacts. In project was provided an authorization for security and getting exactly yours data.',
  },
  {
    id: 7,
    projectName: 'Phonebook',
    github: '',
    livepage: '',
    technologies: [],
    role: 'Developer',
    type: 'Individual project',
    part: 'Whole project',
    imageSRC: emptyPicture,
    description: '',
  },
  {
    id: 8,
    projectName: 'Task PRO',
    github: 'https://github.com/lizaklimova/task-pro',
    livepage: 'https://lizaklimova.github.io/task-pro/',
    technologies: [],
    role: 'Scrum master, Developer',
    type: 'Team project',
    part: 'Create/update board modal',
    imageSRC: taskPro,
    description:
      'TaskPro is an application designed for efficient task and project management. It provides a convenient way to organize tasks and collaborate with teams.',
  },
];

export default projects;
