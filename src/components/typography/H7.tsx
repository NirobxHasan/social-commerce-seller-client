import {Typography} from '@mui/material';
import {IH} from './types';
const H7: React.FC<IH> = ({item, color}) => {
  return (
    <Typography
      fontSize='14px'
      fontWeight={500}
      lineHeight='160%'
      sx={{
        color: color ? color : (theme) => theme.palette.neutral[500],
      }}
    >
      {item}
    </Typography>
  );
};

export default H7;
