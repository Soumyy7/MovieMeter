import styled from 'styled-components';

const CustomRadio = ({ label, ...inputProps }) => {
  return (
    <StyledRadio>
      {label}
      <input {...inputProps} type="radio" />
      <span />
    </StyledRadio>
  );
};

export default CustomRadio;

const StyledRadio = styled.label`
  font-family:
    Courier New,
    monospace;
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 15px;
  font-color: #5252d4;
  user-select: none;
  font-weight: 700;
  color: #feb300;
  line-height: 1.65;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${() => '#c89666'};
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${() => '#e1b382'};
  }
  span:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${() => '#e1b382'};
  }
`;
