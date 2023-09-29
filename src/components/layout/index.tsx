import {Box, Container, useMediaQuery} from '@mui/material';
import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function Layout() {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div>
      <Box display={isNonMobile ? 'flex' : 'block'} height='100%' width='100%'>
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth='250px'
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Container maxWidth='xl' sx={{marginTop: '0.3rem'}}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Layout;
