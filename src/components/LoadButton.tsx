import React, { memo } from "react";

import Button from '@mui/material/Button';

interface Props {
  content: string,
  linkToLoadNextPokemons: string,
  loadPokemons: (url?: string) => Promise<void>,
}

export const LoadButton: React.FC<Props> = memo((props) => {
  const {
    content,
    linkToLoadNextPokemons,
    loadPokemons,
  } = props;

  return (
    <Button
      variant="contained"
      size="large"
      className="main__load-button"
      sx={{
        marginTop: '30px',
        width: '100%',
      }}
      onClick={() => loadPokemons(linkToLoadNextPokemons)}
    >
      {content}
    </Button>
  );
});
