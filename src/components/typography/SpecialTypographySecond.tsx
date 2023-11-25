import {Typography} from '@mui/material';
interface SpecialTypographyCheck {
  text: string;
}
const SpecialTypographySecond: React.FC<SpecialTypographyCheck> = ({text}) => {
  return (
    <Typography fontSize='40px' fontWeight='600' lineHeight='120%'>
      {text}
    </Typography>
  );
};

export default SpecialTypographySecond;
