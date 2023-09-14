import {Box, useMediaQuery} from '@mui/material';
import {useState} from 'react';
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
        </Box>
      </Box>
    </div>
  );
}

export default Layout;
