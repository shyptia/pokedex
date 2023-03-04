import React, { memo } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pokemon } from "../types/Pokemon";
import { createRow } from "../helpers/table";

interface Props {
  selectedPokemon: Pokemon,
}

export const TableComponent: React.FC<Props> = memo(({ selectedPokemon }) => {
  const attack = selectedPokemon.stats.find(stat => stat.stat.name === 'attack');
  const hp = selectedPokemon.stats.find(stat => stat.stat.name === 'hp');
  const defense = selectedPokemon.stats.find(stat => stat.stat.name === 'defense');
  const specialAttack = selectedPokemon.stats.find(stat => stat.stat.name === 'special-attack');
  const specialDefense = selectedPokemon.stats.find(stat => stat.stat.name === 'special-defense');
  const speed = selectedPokemon.stats.find(stat => stat.stat.name === 'speed');

  const rows = [
    createRow('Type', selectedPokemon.types.map(type => type.type.name).join(', ')),
    createRow('Attack', String(attack?.base_stat)),
    createRow('Defense', String(defense?.base_stat)),
    createRow('HP', String(hp?.base_stat)),
    createRow('SP Attack', String(specialAttack?.base_stat)),
    createRow('SP Defense', String(specialDefense?.base_stat)),
    createRow('Speed', String(speed?.base_stat)),
    createRow('Weight', String(selectedPokemon.weight)),
    createRow('Total moves', String(selectedPokemon.moves.length)),
  ];
  
  return (
    <TableContainer
      component={Paper}
      sx={{ width: 'max-content' }}
    >
      <Table sx={{ width: 'max-content' }}>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  width: 90,
                }}
              >
                {row.name}
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  width: 70,
                }}
              >
                {row.characteristic}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
})
