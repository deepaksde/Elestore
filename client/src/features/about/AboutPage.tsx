import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import agents from '../../app/api/agents';

export default function AboutPage() {
  const [validationError, setValidationError] = useState<string[]>([]);

  function getValidationError() {
    agents.TestErrors.getValidationError()
      .then(() => console.log('should not be seen'))
      .catch((error) => setValidationError(error));
  }

  return (
    <Container>
      <Typography variant='h3' gutterBottom>
        Errors for testing purpose
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant='contained'
          onClick={() =>
            agents.TestErrors.get400Error().catch((error) => console.log(error))
          }>
          400 Error
        </Button>
        <Button
          variant='contained'
          onClick={() =>
            agents.TestErrors.get401Error().catch((error) => console.log(error))
          }>
          401 Error
        </Button>
        <Button
          variant='contained'
          onClick={() =>
            agents.TestErrors.get404Error().catch((error) => console.log(error))
          }>
          404 Error
        </Button>
        <Button
          variant='contained'
          onClick={() =>
            agents.TestErrors.get500Error().catch((error) => console.log(error))
          }>
          500 Error
        </Button>
        <Button variant='contained' onClick={getValidationError}>
          Validation Error
        </Button>
      </ButtonGroup>
      {validationError.length > 0 && (
        <Alert severity='error'>
          <AlertTitle> Validation Error</AlertTitle>
          <List>
            {validationError.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
