import { APIEndpoints } from "./endpoints";

export default function getPokemons() {
  return fetch(`${APIEndpoints.GET_POKEMONS()}?limit=151`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Server error");
      return res.json();
    })
    .then((res) => {
      return res.results;
    });
}
