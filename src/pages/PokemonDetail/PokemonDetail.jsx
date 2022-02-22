import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getPokemonDetail from "../../api/getPokemonDetail";
import PokemonImage from "../../components/PokemonImage";
import PokemonTitle from "../../components/PokemonTitle";
import FavouriteButton from "../../components/FavouriteButton";
import {
  ContainerStyled,
  ContentStyled,
  CloseStyled,
  DescriptionStyled,
  ItemStyled,
  TitleStyled,
  ValueStyled,
} from "./pokemonDetail.styles";
import { FavouritesContext } from "../../context/FavouritesContext";

const PokemonDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState();
  const { toggleFavourite, isFavourite } = useContext(FavouritesContext);

  useEffect(() => {
    getPokemonDetail(name).then(setPokemon);
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <ContainerStyled>
      <ContentStyled>
        <PokemonImage name={pokemon.name} />
        <CloseStyled onClick={() => navigate(-1)}>X</CloseStyled>
        <PokemonTitle>{pokemon.name}</PokemonTitle>
        <DescriptionStyled>
          <ItemStyled>
            <TitleStyled>ID:</TitleStyled>
            <ValueStyled>{pokemon.id}</ValueStyled>
          </ItemStyled>
          <ItemStyled isList>
            <TitleStyled>Types:</TitleStyled>
            <ul>
              {pokemon.types.map(({ type }) => (
                <li key={type.name}>{type.name}</li>
              ))}
            </ul>
          </ItemStyled>
          <ItemStyled>
            <TitleStyled>Height:</TitleStyled>
            <ValueStyled>{pokemon.height}</ValueStyled>
          </ItemStyled>
          <ItemStyled isList>
            <TitleStyled>Abilities:</TitleStyled>
            <ul>
              {pokemon.abilities.map(({ ability }) => (
                <li key={ability.name}>{ability.name}</li>
              ))}
            </ul>
          </ItemStyled>
        </DescriptionStyled>
        <FavouriteButton
          onClick={() => toggleFavourite(pokemon.name)}
          isFavourite={isFavourite(pokemon.name)}
        />
      </ContentStyled>
    </ContainerStyled>
  );
};

export default PokemonDetail;
