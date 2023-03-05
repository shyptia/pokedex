import { NamedAPIResource } from "./NamedAPIResource"

export interface PokemonAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface VersionGameIndex {
  game_index: number,
  version: NamedAPIResource,
}

export interface PokemonHeldItem {
  item: NamedAPIResource,
  version_details: {
    version: NamedAPIResource,
    rarity: number,
  }
}

export interface PokemonMove {
  move: NamedAPIResource,
  version_group_details: {
    move_learn_method: NamedAPIResource,
    version_group: NamedAPIResource,
    level_learned_at: number,
  },
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource,
}

export interface PokemonTypePast {
  generation: NamedAPIResource,
  types: PokemonType,
}

export interface PokemonSprites {
  front_default: string,
  front_shiny: string,
  front_female: string,
  front_shiny_female: string,
  back_default: string,
  back_shiny: string,
  back_female: string,
  back_shiny_female: string,
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource,
}

export interface Pokemon {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number,
  abilities: PokemonAbility[],
  forms: NamedAPIResource[],
  game_indices: VersionGameIndex[],
  held_items: PokemonHeldItem[],
  location_area_encounters: string,
  moves: PokemonMove[],
  past_types: PokemonTypePast[],
  sprites: PokemonSprites,
  species: NamedAPIResource,
  stats: PokemonStat[],
  types: PokemonType[],
}
