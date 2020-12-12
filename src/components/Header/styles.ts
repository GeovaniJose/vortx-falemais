import styled, { css } from 'styled-components';

interface MenuProps {
  currentPath?: string;
}

export const Container = styled.header`
  position: fixed;
  width: 100%;
  padding: 16px 30px;
  background: #f4f2ed;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;

    h1 {
      color: #ae8952;
      font-weight: bold;
    }
  }
`;

export const Menu = styled.nav<MenuProps>`
  margin-left: auto;

  button,
  a {
    padding: 20px 10px;
    border: 0;
    color: #ae8952;
    background: transparent;
    transition: all 0.3s;

    &:hover {
      background: #ae8952;
      color: #f4f2ed;
    }
  }

  a {
    margin-left: 10px;

    ${props =>
      props.currentPath === '/historic' &&
      css`
        background: #ae8952;
        color: #f4f2ed;
      `}
  }
`;
