import { Button, Divider, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { history } from '../index';

const ServerError = () => {
  // const history = useHistory();
  const { state } = useLocation() as any;
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant='h3' gutterBottom>
            {state.error.title}
          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || 'Internal Server Error'}
          </Typography>
        </>
      ) : (
        <Typography variant='h3' gutterBottom>
          Server Error
        </Typography>
      )}
      <Button onClick={() => history.push('/catalog')}>Go back to store</Button>
    </Container>
  );
};

export default ServerError;
