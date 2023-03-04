import React, { memo } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface Props {
  message: string,
  type: "error" | "warning" | "info",
  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>,
}

export const MessageNotification: React.FC<Props> = memo((props) => {
  const { message, type, setErrorMessage } = props;

  if (setErrorMessage) {
    setTimeout(() => setErrorMessage(''), 3000);
  }

  return (
    <Alert
      severity={type}
      style={{
        width: '50%',
      }}
    >
      <AlertTitle>
        {type[0].toUpperCase() + type.slice(1)}
      </AlertTitle>
      
      {message}
    </Alert>
  );
});
