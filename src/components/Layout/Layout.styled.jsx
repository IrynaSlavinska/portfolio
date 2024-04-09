import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  padding: 10px 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1272px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1272px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 375px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const StyledNav = styled(NavLink)`
  color: var(--light);
  font-size: 20px;
  &:hover,
  &:focus {
    color: var(--green);
  }
  &.active {
    color: var(--green);
    padding: 4px 8px;
    border-bottom: 2px solid #8ce436;
    border-radius: 8px;
    box-shadow: 0 0 5px #8ce436, 0 0 5px inset;
  }
`;
