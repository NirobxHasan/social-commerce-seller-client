import {ChevronLeft} from '@mui/icons-material';
import {Box, Drawer, IconButton, Typography, useTheme} from '@mui/material';
import {FlexBetween} from '../../styled/customFlexStyle';

function Sidebar({isSidebarOpen, setIsSidebarOpen, drawerWidth, isNonMobile}) {
  const theme = useTheme();
  return (
    <Box>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant='persistent'
          anchor='left'
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              //Modify  this class
              color: theme.palette.grey[50],
              backgroundColor: theme.palette.primary[500],
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width={'100%'}>
            <Box m='1.5rem 2rem 2rem 3rem'>
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display='flex' alignItems={'center'} gap='0.5rem'>
                  <Typography variant='h4' fontWeight='bold'>
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    sx={{
                      color: theme.palette.primary[500],
                    }}
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

export default Sidebar;
