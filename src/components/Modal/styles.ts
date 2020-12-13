import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin-top: 8px;
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
