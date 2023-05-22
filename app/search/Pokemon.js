const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async (pokemonName) => {
  try {
    const res = await fetch(API_URL + pokemonName);
    if (!res.ok) {
      throw Error;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
export default async function Pokemon({ pokemon: pokemonSearchParam }) {
  const pokemon = await fetchPokemon(pokemonSearchParam);
  return (
    <div>
      {pokemon?.abilities ? JSON.stringify(pokemon) : "Not found"}
    </div>
  );
}
