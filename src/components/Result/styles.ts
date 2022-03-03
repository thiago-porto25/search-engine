import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  column-gap: 20px;
  margin-bottom: 48px;
`;

export const Left = styled.div`
  overflow: hidden;
  flex: 2;
  aspect-ratio: 1/1;
`;

export const Right = styled.div<{ hovercolor: string }>`
  flex: 10;

  a {
    color: ${(p) => p.color};
  }

  h1:hover {
    transition: 150ms ease;
    color: ${(p) => p.hovercolor};
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;
