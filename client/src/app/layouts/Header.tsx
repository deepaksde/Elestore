import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

export interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant='h6' pl={8}>
          Elect-Store
        </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
