import { APIEndpoints } from "./endpoints";

export default function getPokemonDetail(pokemonName) {
  return fetch(APIEndpoints.GET_POKEMON_DETAIL(pokemonName), {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Server error");
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
