import { Alert, Snackbar } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { IResponseForm } from '../../types/formTypes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './AlertSnackBar.module.css';

interface AlertSnackBarProps {
  response: IResponseForm;
}

export const AlertSnackBar: FC<AlertSnackBarProps> = ({ response }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (response.open) {
      setOpen(true);
    }
  }, [response]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      autoHideDuration={2000}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Alert
        sx={{ width: '100%' }}
        severity={response?.error ? 'error' : 'success'}
      >
        {response && response.message}
      </Alert>
    </Snackbar>
  );
};
