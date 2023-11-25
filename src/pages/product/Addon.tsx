import {PageHeader} from '@/styled/CustomTypography';
import {PaperContainer} from '@/styled/PaperContainer';
import {FlexBetween} from '@/styled/customFlexStyle';
import {CustomButtonPrimary} from '@/styled/customIconButton';
import AddIcon from '@mui/icons-material/Add';
function Addon() {
  return (
    <>
      <FlexBetween mb={'1rem'}>
        <PageHeader>Addon</PageHeader>

        <CustomButtonPrimary startIcon={<AddIcon />}>
          Create Addon
        </CustomButtonPrimary>
      </FlexBetween>
      <PaperContainer>okk</PaperContainer>
    </>
  );
}

export default Addon;
