import React, { memo } from 'react';
import '../styles/Header.css';

import { Typography } from '@mui/material';

export const Header: React.FC = memo(() => {
  return (
    <header className='header'>
      <Typography variant="h1" className='header__title'>
        Pokedex
      </Typography>
    </header>
  );
});
