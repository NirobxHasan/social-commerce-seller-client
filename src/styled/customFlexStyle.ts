import {Box} from '@mui/material';
import {styled} from '@mui/system';

export const FlexBetween = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
}));
export const FlexStart = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

export const FlexCenter = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
