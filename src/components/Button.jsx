import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: ${(props) => props.$buttonType == "text-button"? '#f0b322' : '#1f2937'};;
  background-color: ${(props) => props.$buttonType == "text-button"? 'transparent' : '#f0b322'};
  border-radius: 6px;
  border: none;

  &:hover{
    background-color: #f0920e;
  }
`


export default Button;