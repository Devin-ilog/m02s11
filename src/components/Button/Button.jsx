import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: red;
`;

function Button({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

export default Button;
