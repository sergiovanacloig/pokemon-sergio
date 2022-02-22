import { InputStyled } from "./input.styles";

const Input = ({ placeholder, value, onChange }) => (
  <InputStyled
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default Input;
