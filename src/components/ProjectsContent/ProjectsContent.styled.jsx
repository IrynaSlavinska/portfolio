import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ListItem = styled.li`
  width: calc((100% - 90px) / 4);
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid var(--green);
  border-radius: 8px;
  padding: 16px;
  transition: transform var(--animation), box-shadow var(--animation);

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 0 0 5px var(--green), 0 0 5px inset;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 276px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  color: var(--green);
`;

export const LinkOut = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AccentSpan = styled.span`
  color: var(--green);
`;
