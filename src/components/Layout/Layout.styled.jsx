import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  padding: 10px 16px;
  margin: 0 auto;
  max-width: 1272px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 16px;
  margin: 0 auto;
  max-width: 1272px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 40px;
`;

export const StyledNav = styled(NavLink)`
  color: var(--light);
  font-size: 20px;
  transition: color var(--animation), border-bottom var(--animation);

  &:hover,
  &:focus {
    color: var(--green);
  }
  &.active {
    color: var(--green);
    padding: 4px 8px;
    border-bottom: 2px solid var(--green);
    border-radius: 8px;
    box-shadow: 0 0 5px var(--green), 0 0 5px inset;
    transition: color var(--animation), border-bottom var(--animation),
      box-shadow var(--animation);
  }
`;
