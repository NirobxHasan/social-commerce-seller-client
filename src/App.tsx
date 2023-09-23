import {Button, CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import Layout from './components/layout';
import {themeSetting} from './theme';
import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function App() {
  const theme = createTheme(themeSetting());
  return (
    <>
     <BrowserRouter>
     <ThemeProvider theme={theme}>
        <CssBaseline />
       <Routes>
       <Route element={<Layout />}>
       <Route path="/" element={<Navigate to="/dashboard" replace />} />
       <Route path="/dashboard" element={<Dashboard />} />
       </Route>
       </Routes>
      </ThemeProvider>
     </BrowserRouter>
      
    </>
  );
}

export default App;
