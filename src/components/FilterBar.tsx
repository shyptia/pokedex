import React, { memo } from "react";
import '../styles/FilterBar.css'

import { typesWithColors } from "../helpers/types";
import { Button } from '@mui/material';

interface Props {
  selectedTypeFilters: string[],
  setSelectedTypeFilters: React.Dispatch<React.SetStateAction<string[]>>,
}

export const FilterBar: React.FC<Props> = memo((props) => {
  const { selectedTypeFilters, setSelectedTypeFilters } = props;

  const handleClick = (type: string) => {
    if (selectedTypeFilters.includes(type)) {
      setSelectedTypeFilters(types => types.filter(t => t !== type));
    } else {
      setSelectedTypeFilters(types => [...types, type]);
    }
  }

  return (
    <div className="filter-bar">
      <Button
        sx={{
          backgroundColor: selectedTypeFilters.length === 0
            ? 'lightskyblue'
            : 'transparent',
          marginLeft: '5px',
          marginBottom: '5px',
          color: 'black',
          border: '3px solid lightskyblue',
          borderRadius: '5px',
          ":hover": {
            backgroundColor: 'lightskyblue',
          }
        }}
        onClick={() => setSelectedTypeFilters([])}
      >
        all
      </Button>
      
      {typesWithColors.map(type => (
        <Button
          key={type.name}
          sx={{
            backgroundColor: selectedTypeFilters.includes(type.name)
              ? type.color
              : 'transparent',
            marginLeft: '5px',
            marginBottom: '5px',
            color: 'black',
            border: `3px solid ${type.color}`,
            borderRadius: '5px',
            ":hover": {
              backgroundColor: type.color,
            }
          }}
          onClick={() => handleClick(type.name)}
        >
          {type.name}
        </Button>
      ))}
    </div>
  );
});
