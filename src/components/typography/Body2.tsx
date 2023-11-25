import {Typography} from '@mui/material';
import {IH} from './types';
export interface IBody2 extends IH {
  color?: string;
  hoverText?: boolean;
}
const Body2: React.FC<IBody2> = ({item, color, hoverText}) => {
  return (
    <Typography
      fontSize='1rem'
      sx={{
        transition: 'color 0.1s ease-in-out', // Smooth color transition over 0.3 seconds
        '&:hover': {
          color: hoverText ? (theme) => theme.palette.primary.main : '', // Change color on hover
        },
        color: (theme) => (color ? color : theme.palette.neutral[500]),
      }}
    >
      {item}
    </Typography>
  );
};

export default Body2;
