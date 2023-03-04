import { NamedAPIResourceList } from '../types/NamedAPIResourceList';
import { Pokemon } from '../types/Pokemon';
import { client } from '../utils/fetchClient';

export const getPokemons = (url: string) => {
  return client.get<NamedAPIResourceList>(url);
}

export const getOnePokemon = (url: string) => {
  return client.get<Pokemon>(url);
}

export const getAllTypes = (url: string) => {
  return client.get<NamedAPIResourceList>(url);
}
