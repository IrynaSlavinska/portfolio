// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
// const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/projects" element={<div>Projects</div>} />

        {/* <Route path="*" element={<NotFound to={'/'} />}></Route> */}
      </Route>
    </Routes>
  );
};
