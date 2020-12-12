import styled from 'styled-components';
import { Form } from '@unform/web';
import { animated } from 'react-spring';
import { shade } from 'polished';

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
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  main {
    display: flex;
    margin: 64px 0;
    align-items: center;
  }

  > button {
    display: block;
    align-self: center;
    text-decoration: none;
    border: none;
    background: none;
    color: #ae8952;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ae8952')};
    }

    svg {
      margin-right: 12px;
      margin-bottom: 2px;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  margin-left: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;

  &:last-child {
    width: 300px;
    height: 400px;
    border: 3px solid #ae8952;

    span {
      background-image: linear-gradient(white, white),
        linear-gradient(to bottom, #ae8952 50%, #fff 50%);
    }
  }

  span {
    position: absolute;
    width: 110px;
    height: 110px;
    top: -56px;
    font-size: 16px;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 3px solid transparent;
    border-radius: 50%;
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }

  p + p {
    margin-top: 8px;
  }

  strong {
    margin: 28px 0;
    font-size: 40px;
  }
`;
