import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Box, Grid, Stack, TextField, Typography} from '@mui/material';
import {useRef, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {PageHeader} from '../../styled/CustomTypography';
import {PaperContainer} from '../../styled/PaperContainer';
import {FlexCenter} from '../../styled/customFlexStyle';
import {CustomButtonPrimary} from '../../styled/customIconButton';
type Inputs = {
  name: string;
  price: number;
  discount_price?: number;
  ingredients?: string;
  description?: string;
  sku: string;
  image: string[];
};

export interface CustomError {
  message: string;
  ref: {name: string};
  type: string;
}

function NewProduct() {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Inputs>();

  const [image, setImage] = useState(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <PageHeader>Create a new product </PageHeader>
      <PaperContainer>
        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5} alignItems='center'>
            <Grid item md={6} xs={12}>
              <Controller
                name='name'
                control={control}
                rules={{
                  required: 'Product Name is required',
                }}
                render={({field}) => (
                  <TextField
                    {...field}
                    autoComplete='off'
                    label='Product Name'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                <Grid item xs={6}>
                  <Controller
                    name='discount_price'
                    control={control}
                    rules={{
                      required: false,
                    }}
                    render={({field}) => (
                      <TextField
                        {...field}
                        type='number'
                        autoComplete='off'
                        label='Discount Price'
                        variant='outlined'
                        margin='normal'
                        fullWidth
                        error={!!errors.discount_price}
                        helperText={errors.discount_price?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <Controller
                name='ingredients'
                control={control}
                rules={{
                  required: false,
                }}
                render={({field}) => (
                  <TextField
                    {...field}
                    type='text'
                    autoComplete='off'
                    label='Ingredients'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.ingredients}
                    helperText={errors.ingredients?.message}
                  />
                )}
              />
              <Controller
                name='description'
                control={control}
                rules={{
                  required: false,
                }}
                render={({field}) => (
                  <TextField
                    {...field}
                    multiline
                    rows={4}
                    autoComplete='off'
                    label='Description'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.description}
                    helperText={errors.description?.message}
                  />
                )}
              />
              <Controller
                name='sku'
                control={control}
                rules={{
                  required: false,
                }}
                render={({field}) => (
                  <TextField
                    {...field}
                    type='text'
                    autoComplete='off'
                    label='SKU'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.sku}
                    helperText={errors.sku?.message}
                  />
                )}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  cursor: 'pointer',
                  border: '2px dashed grey',
                  width: '300px',
                  height: '300px',
                  position: 'relative',
                }}
                onClick={handleImageClick}
              >
                <input
                  accept='image/*'
                  ref={inputRef}
                  type='file'
                  onChange={handleImageUpload}
                  style={{display: 'none'}}
                />
                {image ? (
                  <img
                    src={image}
                    alt='Uploaded'
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '300px',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <FlexCenter
                    sx={{
                      height: '100%',
                    }}
                  >
                    <CloudUploadIcon
                      sx={{
                        fontSize: 22,
                        marginRight: '5px',
                      }}
                    />
                    <Typography variant='subtitle1'>
                      Click to Upload Image
                    </Typography>
                  </FlexCenter>
                )}
              </Box>
              <Typography variant='subtitle2' p={'5px'}>
                Upload 500 *500 image for best output.
              </Typography>
            </Grid>
          </Grid>
          <Stack mt={'20px'}>
            <CustomButtonPrimary type='submit'>Create</CustomButtonPrimary>
          </Stack>
        </Box>
      </PaperContainer>
    </>
  );
}

export default NewProduct;
