import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background: #ae8952;
  padding: 0 16px;
  border: 0;
  border-radius: 10px;
  color: #f4f2ed;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.3, '#ae8952')};
  }
`;
