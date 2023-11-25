// import {useMediaQueries} from '@/hooks/useMediaQueries';
import {useMediaQueries} from '@/hooks/useMediaQueries';
import {Typography} from '@mui/material';
import {ITypography} from './types';

const P4: React.FC<ITypography> = ({
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
      fontWeight={fontWeight ? fontWeight : 300}
      fontSize={isSmall ? '1rem' : '1rem'}
      lineHeight='160%'
      sx={{
        color: color ? color : (theme) => theme.palette.neutral[400],
        ...ellipsisStylE,
        ...sx,
      }}
    >
      {item}
    </Typography>
  );
};

export default P4;
