import {ChevronLeft, HomeMaxOutlined} from '@mui/icons-material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import {
  Box,
  Collapse,
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
import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {FlexBetween} from '../../styled/customFlexStyle';
function Sidebar({isSidebarOpen, setIsSidebarOpen, drawerWidth, isNonMobile}) {
  const theme = useTheme();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
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
              {navItem.map(({text, route, icon, subItem}) => {
                if (subItem) {
                  return (
                    <ItemWihSubItem
                      text={text}
                      route={route}
                      icon={icon}
                      subItem={subItem}
                      key={text}
                    />
                  );
                }
                return (
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
                );
              })}
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
    route: '/',
    icon: <ProductionQuantityLimitsOutlinedIcon />,
    subItem: [
      {
        text: 'Add Product',
        route: '/product/newproduct',
        icon: <CategoryOutlinedIcon />,
      },
      {
        text: 'Addon',
        route: '/product/addon',
        icon: <CategoryOutlinedIcon />,
      },
      {
        text: 'Product List',
        route: '/product',
        icon: <InventoryOutlinedIcon />,
      },
    ],
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

const ItemWihSubItem = ({text, route, icon, subItem}: any) => {
  const theme = useTheme();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem key={text} disablePadding sx={{my: '0.6rem'}}>
        <ListItemButton
          onClick={handleToggle}
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
              color: route === pathname ? 'primary' : 'secondary.light',
              ml: '2rem',
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout={300} unmountOnExit>
        <List component='div' disablePadding>
          {subItem.map(({text, route, icon}) => (
            <ListItem key={text} disablePadding sx={{my: '0.4rem'}}>
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
                    color: route === pathname ? 'primary' : 'secondary.light',
                    ml: '3rem',
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};
