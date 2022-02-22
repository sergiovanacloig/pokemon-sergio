import { useEffect, useState, useContext } from "react";
import getPokemons from "../../api/getPokemons";
import Pokemon from "../../components/Pokemon";
import HeaderList from "../../components/HeaderList";
import { ListStyled } from "./pokemonList.styles";
import { FavouritesContext } from "../../context/FavouritesContext";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const { toggleFavourite, isFavourite } = useContext(FavouritesContext);

  useEffect(() => {
    getPokemons().then(setPokemons);
  }, []);

  useEffect(() => {
    setPokemonsFiltered(pokemons);
  }, [pokemons]);

  const handleSearch = (query) => {
    const pokemonsFiltered = pokemons.filter((pokemon) =>
      pokemon.name.includes(query.toLowerCase())
    );

    setPokemonsFiltered(pokemonsFiltered);
  };

  return (
    <section>
      <HeaderList onSearch={handleSearch} />
      {pokemonsFiltered.length > 0 && (
        <ListStyled>
          {pokemonsFiltered.map((pokemon) => (
            <Pokemon
              key={pokemon.name}
              name={pokemon.name}
              onToggleFavourite={toggleFavourite}
              isFavourite={isFavourite(pokemon.name)}
            />
          ))}
        </ListStyled>
      )}
    </section>
  );
};

export default PokemonList;
