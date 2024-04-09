import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
const HomePage = lazy(() => import('pages/HomePage'));
const AboutPage = lazy(() => import('pages/ResumePage'));
const ProjectsPage = lazy(() => import('pages/ProjectsPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/resume" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="*" element={<ErrorPage to={'/'} />}></Route>
      </Route>
    </Routes>
  );
};
