import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ProductDetails from '../../features/catalog/ProductDetails';
import PageNotFound from '../../features/pageNotFound/pageNotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/catalog' component={Catalog} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/catalog/:id' component={ProductDetails} />
          <Route exact path='/login' component={PageNotFound} />
          <Route exact path='/register' component={PageNotFound} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
