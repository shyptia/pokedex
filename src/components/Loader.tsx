import React, { memo } from 'react';
import '../styles/Loader.css'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader: React.FC = memo(() => {
  return (
    <Box sx={{
      position: 'relative',
    }}>
      <CircularProgress className='loader' />
    </Box>
  );
});
