import React, { memo } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Pokemon } from '../types/Pokemon';
import { typesWithColors } from '../helpers/types';
import { TypeButton } from './TypeButton';

interface Props {
  pokemon: Pokemon,
  setSelectedIdPokemon: React.Dispatch<React.SetStateAction<number>>,
}

export const PokemonItem: React.FC<Props> = memo((props) => {
  const { pokemon, setSelectedIdPokemon } = props;

  return (
    <Card
      sx={{ maxWidth: 250 }}
      onClick={() => setSelectedIdPokemon(pokemon.id)}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CardMedia
          component="img"
          height="150px"
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} image`}
          sx={{ width: 150 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {pokemon.name}
          </Typography>

          {pokemon.types.map(type => {
            const foundType = typesWithColors.find(item => item.name === type.type.name) || null;

            return (
              <TypeButton
                key={type.type.name}
                foundType={foundType}
              />
            );
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
});
