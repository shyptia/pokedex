import React, { memo } from 'react';
import Grid from '@mui/material/Grid';
import { Pokemon } from '../types/Pokemon';
import { PokemonItem } from './PokemonItem';

interface Props {
  pokemons: Pokemon[],
  setSelectedIdPokemon: React.Dispatch<React.SetStateAction<number>>,
}

export const GridComponent: React.FC<Props> = memo((props) => {
  const { pokemons, setSelectedIdPokemon } = props;

  return (
    <Grid container spacing={2}>
      {pokemons.map(pokemon => (
        <Grid
          item
          xs={12}
          sm={4}
          key={pokemon.id}
        >
          <PokemonItem
            pokemon={pokemon}
            setSelectedIdPokemon={setSelectedIdPokemon}
          />
        </Grid>
      ))}
    </Grid>
  );
});
