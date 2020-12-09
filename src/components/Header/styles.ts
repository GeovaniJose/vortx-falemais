import styled from 'styled-components';

export const Container = styled.header`
  padding: 16px 30px;
  background: #f4f2ed;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  h1 {
    color: #ae8952;
    font-weight: bold;
  }

  nav {
    margin-left: auto;

    button {
      background: transparent;
      border: 0;
      color: #ae8952;
      padding: 20px 10px;
      transition: all 0.3s;

      &:hover {
        background: #ae8952;
        color: #f4f2ed;
      }
    }

    button + button {
      margin-left: 10px;
    }
  }
`;
