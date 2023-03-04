import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Pokemon } from '../types/Pokemon';
import { TableComponent } from './TableComponet';
import { Button } from '@mui/material';

interface Props {
  selectedPokemon: Pokemon,
  setSelectedIdPokemon: React.Dispatch<React.SetStateAction<number>>,
}

export const SelectedPokemon: React.FC<Props> = ((props) => {
  const { selectedPokemon, setSelectedIdPokemon } = props;

  return (
    <Card
      sx={{
        maxWidth: 250,
      }}
    >
      <CardMedia
        component="img"
        alt={`${selectedPokemon.name} image`}
        height="150"
        image={selectedPokemon.sprites.front_default}
        sx={{
          width: 150,
          margin: '0 auto',
        }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {`${selectedPokemon.name} #${String(selectedPokemon.id).padStart(3, '0')}`}
        </Typography>

        <TableComponent selectedPokemon={selectedPokemon} />

        <Button
          variant="contained"
          sx={{ marginTop: '15px' }}
          onClick={() => setSelectedIdPokemon(0)}
        >
          I got it
        </Button>
      </CardContent>
    </Card>
  );
});
