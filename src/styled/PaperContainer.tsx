import {Paper, styled} from '@mui/material';

export const PaperContainer = styled(Paper)(() => ({
  ransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  backgroundClip: 'border-box',
  border: '0px solid rgba(0, 0, 0, 0.125)',
  borderRadius: '0.5rem',
  boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
  padding: '24px',
}));
