import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from '@mui/material';
import { Product } from '../../app/models/product';

export interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: { fontWeight: 'bold', color: 'primary.main' },
          }}
        />
        <CardMedia
          component='img'
          alt={product.name}
          sx={{
            maxheight: '140',
            backgroundSize: 'contain',
            bgcolor: 'primary.main',
          }}
          image={product.pictureUrl}
        />
        <CardContent>
          <Typography gutterBottom color='secondary.main' variant='h5'>
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Add to Cart</Button>
          <Button size='small'>View</Button>
        </CardActions>
      </Card>
    </>
  );
}
