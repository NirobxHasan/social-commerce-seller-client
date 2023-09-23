import {DarkModeOutlined, Menu} from '@mui/icons-material';
import {AppBar, Toolbar, useTheme} from '@mui/material';
import {FlexBetween} from '../../styled/customFlexStyle';
import {CustomIconButton} from '../../styled/customIconButton';

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Function;
}

function Navbar({isSidebarOpen, setIsSidebarOpen}: NavbarProps) {
  const theme = useTheme();

  return (
    <AppBar
      position='static'
      sx={{
        height: '3rem',
        justifyContent: 'center',
        background: 'none',
        boxShadow: 'none',
        backgroundColor: theme.palette.neutral[200],
      }}
    >
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <FlexBetween>
          <CustomIconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu />
          </CustomIconButton>
        </FlexBetween>
        <FlexBetween gap={1.5}>
          <CustomIconButton>
            {/* {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )} */}
            <DarkModeOutlined />
          </CustomIconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
