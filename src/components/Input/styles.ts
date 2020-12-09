import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContentProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Label = styled.label`
  p {
    padding-left: 18px;
    padding-bottom: 2px;
  }

  & + label {
    display: block;
    margin-top: 16px;
    text-align: justify;
  }
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 16px;

  border: 2px solid #fff;
  color: #b1aaa0;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ae8952;
      border-color: #ae8952;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ae8952;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #ae8952;

    &::placeholder {
      color: #b1aaa0;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
