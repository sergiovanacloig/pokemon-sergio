import { useState } from "react";
import logo from "../../assets/pokemon-logo.png";
import {
  HeaderStyled,
  LogoStyled,
  InputContainerStyled,
} from "./headerList.styles";
import Input from "../Input";

const HeaderList = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (ev) => {
    const newValue = ev.target.value;
    setSearch(newValue);
    onSearch(newValue);
  };

  return (
    <HeaderStyled>
      <LogoStyled aria-label="Logo" align="center" src={logo} />
      <InputContainerStyled>
        <Input
          placeholder={"Search for pokemons..."}
          value={search}
          onChange={handleChange}
        />
      </InputContainerStyled>
    </HeaderStyled>
  );
};

export default HeaderList;
