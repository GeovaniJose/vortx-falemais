import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ae8952;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    box-shadow: 0px 5px 2px 1px rgba(0, 0, 0, 0.4);

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: #ae8952 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
