import { ButtonStyled, ButtonReStyled } from "./styles";

function Button({ children }) {
  return (
    <ButtonStyled color="white" primary>
      {children}
    </ButtonStyled>
  );
}

export default Button;
