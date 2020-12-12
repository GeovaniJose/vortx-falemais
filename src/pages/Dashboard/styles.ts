import styled from 'styled-components';
import { Form } from '@unform/web';
import { animated } from 'react-spring';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AnimatedForm = styled(animated(Form))`
  position: absolute;

  h1 {
    margin-bottom: 24px;
  }
`;

export const AnimatedSuccess = styled(animated.section)`
  width: 400px;
  height: 400px;
  position: absolute;
  background-color: #ae8952;
`;
