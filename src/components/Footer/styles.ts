import styled from 'styled-components';

interface Props {
  background: string;
}

const Container = styled.footer<Props>`
  background-color: ${(p) => p.background};
  height: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0 0 0;
`;

export default Container;
