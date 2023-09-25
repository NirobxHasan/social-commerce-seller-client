import {ChevronLeft, HomeMaxOutlined} from '@mui/icons-material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {FlexBetween} from '../../styled/customFlexStyle';
function Sidebar({isSidebarOpen, setIsSidebarOpen, drawerWidth, isNonMobile}) {
  const theme = useTheme();
  const {pathname} = useLocation();
  const navigate = useNavigate();

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
              {navItem.map(({text, route, icon}) => (
                <ListItem key={text} disablePadding sx={{my: '0.6rem'}}>
                  <ListItemButton
                    onClick={() => navigate(route)}
                    sx={
                      route !== pathname
                        ? {
                            color: theme.palette.secondary.light,
                            '&:hover': {
                              backgroundColor: theme.palette.primary[600],
                            },
                          }
                        : {
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: theme.palette.secondary.light,
                            },
                          }
                    }
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          route === pathname ? 'primary' : 'secondary.light',
                        ml: '2rem',
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
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
    text: 'Dashboard',
    route: '/dashboard',
    icon: <HomeMaxOutlined />,
  },
  {
    text: 'Live Orders',
    route: '/order',
    icon: <LocalShippingOutlinedIcon />,
  },
  {
    text: 'Product',
    route: '/product',
    icon: <ProductionQuantityLimitsOutlinedIcon />,
  },
  {
    text: 'Category',
    route: '/category',
    icon: <CategoryOutlinedIcon />,
  },
  {
    text: 'Inventory',
    route: '/intventory',
    icon: <InventoryOutlinedIcon />,
  },

  {
    text: 'Customers',
    route: '/customers',
    icon: <Groups2OutlinedIcon />,
  },
  {
    text: ' Order History',
    route: '/order-history',
    icon: <ListAltOutlinedIcon />,
  },
  {
    text: ' Store',
    route: '/store',
    icon: <ListAltOutlinedIcon />,
  },
];
