import {Theme, useMediaQuery} from '@mui/material';

export const useMediaQueries = () => {
  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isMedium = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const isLargeUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  return {isXSmall, isSmall, isMedium, isLargeUp};
};
