const BASE_URL = 'https://pokeapi.co/api/v2';

const pokemonEndpoint = {
  getTwelvePokemons: '/pokemon/?limit=12',
  getTypes: '/type?limit=999',
};

export const linkToGetTwelvePokemons = BASE_URL + pokemonEndpoint.getTwelvePokemons;
export const linkToLoadPokemonsTypes = BASE_URL + pokemonEndpoint.getTypes;
