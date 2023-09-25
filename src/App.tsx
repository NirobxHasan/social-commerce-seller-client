import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import {themeSetting} from './theme';

function App() {
  const theme = createTheme(themeSetting());
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/product' element={<Product />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
