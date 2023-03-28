import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "red" : "blue")};
  color: ${(props) => props.color ?? "black"};

  &:hover {
    background-color: green;
  }
`;
