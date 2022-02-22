import { ImageStyled } from "./pokemonImage.style";

const PokemonImage = ({ name }) => (
  <ImageStyled
    aria-label={`Image of ${name}`}
    align="center"
    src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
  />
);

export default PokemonImage;
