import React, { memo } from 'react';
import '../styles/TypeButton.css';

import { TypesWithColors } from '../types/TypesWithColor';

interface Props {
  foundType: TypesWithColors| null,
}

export const TypeButton: React.FC<Props> = memo(({ foundType }) => {
  return (
    <div
      className='type-button'
      style={{
        backgroundColor: foundType?.color,
      }}
    >
      {foundType?.name}
    </div>
  );
});
