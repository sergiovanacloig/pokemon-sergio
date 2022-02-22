export const url = "https://pokeapi.co/api/v2";

export const APIEndpoints = {
  GET_POKEMONS: () => `${url}/pokemon`,
  GET_POKEMON_DETAIL: (name) => `${url}/pokemon/${name}`,
};
