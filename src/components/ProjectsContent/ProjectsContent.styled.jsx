import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
`;

export const ListItem = styled.li`
  width: calc((100% - 60px) / 3);
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid var(--green);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 1px 2px 5px 0px var(--green);
`;

export const ImageContainer = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 276px;
  overflow: hidden;
  box-shadow: 1px 2px 5px 0px var(--green);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  text-align: center;
  color: var(--green);
`;

export const LinkOut = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
`;
