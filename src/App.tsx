import {Button, CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import Layout from './components/layout';
import {themeSetting} from './theme';

function App() {
  const theme = createTheme(themeSetting());
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout></Layout>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </ThemeProvider>
    </>
  );
}

export default App;
