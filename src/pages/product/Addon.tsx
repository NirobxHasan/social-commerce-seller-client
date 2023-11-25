import {PageHeader} from '@/styled/CustomTypography';
import {PaperContainer} from '@/styled/PaperContainer';
import {FlexBetween} from '@/styled/customFlexStyle';
import {CustomButtonPrimary} from '@/styled/customIconButton';
import {Box, Grid, TextField} from '@mui/material';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';

type Inputs = {
  title: string;
  price: number;
};

export interface CustomError {
  message: string;
  ref: {name: string};
  type: string;
}
function Addon() {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <FlexBetween mb={'1rem'}>
        <PageHeader>Addon</PageHeader>
      </FlexBetween>
      <PaperContainer>
        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={'1rem'}
          >
            <Grid item md={6}>
              <Controller
                name='title'
                control={control}
                rules={{
                  required: 'Product Name is required',
                }}
                render={({field}) => (
                  <TextField
                    {...field}
                    autoComplete='off'
                    label='Item Name'
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    error={!!errors.title}
                    helperText={errors.title?.message}
                  />
                )}
              />
            </Grid>
            <Grid item md={3}>
              <Controller
                name='price'
                control={control}
                rules={{
                  required: 'Price is required',
                }}
                render={({field}) => (
                  <TextField
                    {...field}
                    type='number'
                    required
                    autoComplete='off'
                    label='Price'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.price}
                    helperText={errors.price?.message}
                  />
                )}
              />
            </Grid>
            <Grid item md={2}>
              <CustomButtonPrimary type='submit'>Add Item</CustomButtonPrimary>
            </Grid>
          </Grid>
        </Box>
      </PaperContainer>
      <PaperContainer
        sx={{
          mt: '2rem',
        }}
      >
        hello
      </PaperContainer>
    </>
  );
}

export default Addon;
