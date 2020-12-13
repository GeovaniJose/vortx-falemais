import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  max-width: 820px;
  margin: 150px auto 0;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 28px;
  }
`;

export const Table = styled.table`
  border: 6px solid #f4f2ed;
  border-collapse: collapse;

  th {
    padding: 12px 0;
    color: #f4f2ed;
    border: 4px solid #f4f2ed;
    background-color: #4a3a23;
  }

  td {
    padding: 8px;
    text-align: center;
    color: #ae8952;
    border: 0 solid #f4f2ed;
    border-width: 8px 0;
    background-color: #fff;
  }
`;
