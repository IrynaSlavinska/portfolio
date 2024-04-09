import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header, Container, Menu, StyledNav } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        {/* <Container> */}
        <nav>
          <Menu>
            <li>
              <StyledNav to="/">Home</StyledNav>
            </li>
            <li>
              <StyledNav to="/resume">Resume</StyledNav>
            </li>
            <li>
              <StyledNav to="/projects">Projects</StyledNav>
            </li>
          </Menu>
        </nav>
        {/* </Container> */}
      </Header>
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
