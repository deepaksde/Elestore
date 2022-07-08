import { ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

export interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about ', path: '/about' },
  { title: 'contact', path: '/contact' },
];

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register ', path: '/register' },
];

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Box display='flex' alignItems='center' pl={4}>
          <Avatar
            alt='logo'
            sx={{ bgcolor: deepPurple[200], width: 56, height: 56 }}>
            ES
          </Avatar>
          <Typography
            variant='h4'
            pl={2}
            component={NavLink}
            to='/'
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              pr: 4,
            }}>
            Elect-Store
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        <List sx={{ display: 'flex' }}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{
                color: 'inherit',
                typography: 'h6',
                '&:hover': {
                  color: 'grey.400',
                },
                '&.active': {
                  color: 'primary.light',
                  borderBottom: '1px Solid #fff',
                },
              }}>
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </ListItem>
          ))}
        </List>

        <Box display='flex' alignItems='center'>
          <IconButton size='large' color='inherit'>
            <Badge badgeContent={5} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{ color: 'inherit', typography: 'h6' }}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
