import styled, { css } from 'styled-components';
import { ReactComponent as SettingsIcon } from 'assets/svg/cog.svg';

export const Container = styled.header`
  box-sizing: border-box;
  padding: 12px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: initial;
    text-decoration: none;
  }
`;

interface FrameProps {
  isresults: boolean;
}

export const Frame = styled.div<FrameProps>`
  display: flex;
  align-items: center;
  column-gap: 36px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    row-gap: 32px;
    column-gap: 0;
    align-items: ${(p) => !p.isresults && 'flex-start'};
  }
`;

interface IconProps {
  color: string;
  hovercolor: string;
  isresults: boolean;
}

export const Icon = styled(SettingsIcon)<IconProps>`
  transition: all 150ms ease;
  cursor: pointer;
  width: 36px;
  height: 36px;

  path {
    fill: ${(p) => p.color};
  }

  &:hover path {
    fill: ${(p) => p.hovercolor};
  }

  @media only screen and (max-width: 900px) {
    width: 32px;
    height: 32px;

    ${(p) =>
      p.isresults
        ? css`
            position: absolute;
            top: 16px;
            right: 16px;
          `
        : null};
  }
`;
