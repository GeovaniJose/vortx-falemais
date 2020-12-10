import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin-bottom: 100px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  form {
    h1 {
      margin-bottom: 24px;
    }
  }
`;
