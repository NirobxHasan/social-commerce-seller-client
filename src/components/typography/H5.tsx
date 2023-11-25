import {useMediaQueries} from '@/hooks/useMediaQueries';
import {Typography} from '@mui/material';
import {ITypography} from './types';

const H5: React.FC<ITypography> = ({
  item,
  color,
  fontWeight,
  sx,
  textAlign,
  ellipsisStyle,
}) => {
  const {isSmall} = useMediaQueries();
  const ellipsisStylE = ellipsisStyle ? ellipsisStyle : '';
  return (
    <Typography
      textAlign={textAlign}
      fontWeight={fontWeight ? fontWeight : 500}
      fontSize={isSmall ? '1.25rem' : '1.25rem'}
      lineHeight='140%'
      sx={{
        color: color ? color : (theme) => theme.palette.neutral[500],
        ...ellipsisStylE,
        ...sx,
      }}
    >
      {item}
    </Typography>
  );
};

export default H5;
