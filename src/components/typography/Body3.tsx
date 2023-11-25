import {Typography} from '@mui/material';
import {IH1} from './H1';

const Body3: React.FC<IH1> = ({item, color, textAlign}) => {
  return (
    <Typography
      textAlign={textAlign}
      sx={{color: (theme) => (color ? color : theme.palette.neutral[500])}}
    >
      {item}
    </Typography>
  );
};

export default Body3;
