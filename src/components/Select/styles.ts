import styled from 'styled-components';

export const Label = styled.label`
  display: block;

  p {
    padding-left: 18px;
    padding-bottom: 2px;
  }

  & + label {
    margin-top: 16px;
  }

  .react-select__control {
    border: 2px solid #fff;
    box-shadow: none;
    border-radius: 10px;
    padding: 6px;
  }

  .react-select__control:hover {
    border: 2px solid #ae8952;
  }

  .react-select__control--is-focused {
    border: 2px solid #ae8952;
  }

  .react-select__control--menu-is-open .react-select__control--is-focused {
    border: 2px solid #ae8952;
  }

  .react-select__single-value {
    color: #ae8952;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    color: #4a3a23;
  }

  .react-select__option--is-focused {
    background-color: #ae8952;
    opacity: 0.5;
    color: #fff;
  }

  .react-select__option--is-selected {
    background-color: #ae8952;
    color: #fff;
    opacity: 1;
  }
`;
