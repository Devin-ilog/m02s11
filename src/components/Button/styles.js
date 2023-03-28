import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? "red" : "blue")};
  color: ${({ color }) => color ?? "black"};

  &:hover {
    background-color: green;
  }
`;

export const ButtonReStyled = styled(ButtonStyled)`
  background-color: orange;
`;
