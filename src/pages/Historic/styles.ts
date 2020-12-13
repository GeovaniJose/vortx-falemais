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
  margin: 140px auto 80px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  h1 {
    margin-bottom: 28px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f4f2ed;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;

    &:hover {
      background: #888;
    }
  }

  scrollbar-width: thin;
  scrollbar-color: #ccc #f4f2ed;

  &:hover {
    scrollbar-color: #888 #f4f2ed;
  }
`;

export const Table = styled.table`
  border: 6px solid #f4f2ed;
  border-top-width: 0px;
  border-collapse: collapse;

  th {
    padding: 12px 0;
    color: #f4f2ed;
    border: 4px solid #f4f2ed;
    border-top-width: 0px;
    background-color: #4a3a23;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
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
