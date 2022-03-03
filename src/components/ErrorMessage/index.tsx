import React, { useContext } from 'react';
import { Alert, Fade } from '@mui/material';
import { SearchContext } from 'context/searchContext';

const ErrorMessage: React.FC = () => {
  const { error } = useContext(SearchContext);

  return error ? (
    <Fade appear in>
      <Alert
        sx={{ position: 'fixed', top: '24px', right: '24px' }}
        severity="error"
      >
        {error}
      </Alert>
    </Fade>
  ) : null;
};

export default ErrorMessage;
