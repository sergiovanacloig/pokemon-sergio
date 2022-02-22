import { memo } from "react";
import { useNavigate } from "react-router-dom";
import PokemonImage from "../PokemonImage";
import PokemonTitle from "../PokemonTitle";
import FavouriteButton from "../FavouriteButton";
import { ContainerStyled } from "./pokemon.styles";

const Pokemon = ({ name, isFavourite, onToggleFavourite }) => {
  const navigate = useNavigate();

  return (
    <ContainerStyled onClick={() => navigate(`${name}`)}>
      <PokemonImage name={name} />
      <PokemonTitle>{name}</PokemonTitle>
      <FavouriteButton
        onClick={() => onToggleFavourite(name)}
        isFavourite={isFavourite}
      />
    </ContainerStyled>
  );
};

export default memo(Pokemon);
