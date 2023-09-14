import {IconButton, styled} from '@mui/material';

export const CustomIconButton = styled(IconButton)(({theme}) => ({
  color: theme.palette.primary,
  size: 'large',
  '&.MuiButtonBase-root .MuiSvgIcon-root': {
    fontSize: '1.3rem',
  },
}));
