import {Typography, styled} from '@mui/material';

export const PageHeader = styled(Typography)(({theme}) => ({
  fontSize: '2.6rem',
  fontWeight: 600,
  color: theme.palette.primary.light,
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));
