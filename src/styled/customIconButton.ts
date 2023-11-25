import {Button, IconButton, styled} from '@mui/material';

export const CustomIconButton = styled(IconButton)(({theme}) => ({
  color: theme.palette.primary.main,
  size: 'large',
  '&.MuiButtonBase-root .MuiSvgIcon-root': {
    fontSize: '1.3rem',
  },
}));

export const CustomButtonPrimary = styled(Button)(({theme}) => ({
  color: theme.palette.neutral.white,
  backgroundColor: theme.palette.primary.main,
  padding: '6px 20px',

  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const CustomButtonSecondary = styled(Button)(({theme}) => ({
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.secondary[200],
  padding: '6px 20px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

// export const Sec
