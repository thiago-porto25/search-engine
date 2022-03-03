import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';

interface ContainerProps {
  bordercolor: string;
  bgcolor: string;
  bgcolorhover: string;
  iconcolorhover: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 0 24px;
  max-width: 638px;
  width: 100%;
  height: 64px;
  border: 2px solid ${(p) => p.bordercolor};
  background-color: ${(p) => p.bgcolor};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  cursor: text;

  &:hover,
  &:focus-within {
    background-color: ${(p) => p.bgcolorhover};

    path {
      fill: ${(p) => p.iconcolorhover};
    }
  }
`;

interface IconProps {
  color: string;
}

export const Icon = styled(SearchIcon)<IconProps>`
  width: 32px;
  height: 32px;
  transition: all 150ms ease;

  path {
    fill: ${(p) => p.color};
  }
`;

export const Input = styled.input`
  color: ${(p) => p.color};
  line-height: 125%;
  font-size: 16px;
  border: none;
  width: 100%;
  outline: none;
  background-color: transparent;
`;
