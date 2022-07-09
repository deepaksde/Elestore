import { Button, Container, Divider, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant='h3' p={4}>
        Oops - we couldn't find what you are looking for
      </Typography>
      <Divider />
      <Button fullWidth component={Link} to='/catalog' sx={{ p: 4 }}>
        Go back to store
      </Button>
    </Container>
  );
};

export default PageNotFound;
