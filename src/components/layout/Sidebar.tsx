import {ChevronLeft, HomeMaxOutlined} from '@mui/icons-material';
import {Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme} from '@mui/material';
import {FlexBetween} from '../../styled/customFlexStyle';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
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
              backgroundColor: theme.palette.primary.main,
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
                  <Typography variant='h2' fontWeight='bold'>
                    mohonio
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    sx={{
                      color: theme.palette.secondary.main,
                    }}
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>

              {
                navItem.map(({text, icon})=> (
                  <ListItem key={text} disablePadding sx={{my:'0.6rem'}}>
              <ListItemButton sx={{ color: theme.palette.secondary.light}}>
                <ListItemIcon sx={{ color: theme.palette.secondary.light , ml:'2rem'}}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
                ))
              }
          
            <ListItem  disablePadding>
              <ListItemButton sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.main, '&:hover': {
                backgroundColor: theme.palette.secondary.light
              }}}>
                <ListItemIcon sx={{ color: theme.palette.primary.main,ml:'2rem'}}>
                  {4 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={'text'} sx={{ }}/>
              </ListItemButton>
            </ListItem>
        </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

export default Sidebar;



const navItem = [
  {
    text:'Dashboard',
    icon: <HomeMaxOutlined/>
  },
  {
    text:'Live Orders',
    icon: <LocalShippingOutlinedIcon />
  },
  {
    text:'Product',
    icon: < ProductionQuantityLimitsOutlinedIcon/>
  },
  {
    text:'Category',
    icon: <CategoryOutlinedIcon />
  },
  {
    text:'Inventory',
    icon: <InventoryOutlinedIcon/>
  },
  
  {
    text:'Customers',
    icon: <Groups2OutlinedIcon/>
  },
  {
    text:' Order History',
    icon: <ListAltOutlinedIcon/>
  },
  {
    text:' Store',
    icon: <ListAltOutlinedIcon/>
  },
]