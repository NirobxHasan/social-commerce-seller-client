import P5 from '@/components/typography/P5';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import {useRef, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {PageHeader} from '../../styled/CustomTypography';
import {PaperContainer} from '../../styled/PaperContainer';
import {FlexCenter, FlexStart} from '../../styled/customFlexStyle';
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

  const [images, setImages] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImages((prevImages) => [...prevImages, file]);
    }
    // const file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setImage(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const showImage = (file: File) => {
    const reader = new FileReader();
    return reader.readAsDataURL(file);
  };
  console.log(images);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <PageHeader>Create a new product </PageHeader>
      <PaperContainer>
        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
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
            <Grid item md={6} xs={12}>
              <P5 item=' Upload 500 *500 image for best output.' />

              <FlexStart>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index + 1}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '150px',
                      margin: '5px',
                    }}
                  />
                ))}
                <Box
                  sx={{
                    cursor: 'pointer',
                    border: '2px dashed grey',
                    width: '150px',
                    height: '150px',
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
                  <FlexCenter height={'100%'} width={'100%'}>
                    <AddIcon
                      sx={{
                        fontSize: '5rem',
                        color: (theme) => theme.palette.neutral[400],
                      }}
                    />
                  </FlexCenter>
                </Box>
              </FlexStart>
            </Grid>
          </Grid>

          <Box>
            <FormControlLabel
              value='end'
              control={
                <Switch
                  color='primary'
                  onChange={(e) => console.log(e.target.checked)}
                />
              }
              label='Add Stock'
              labelPlacement='end'
            />
          </Box>

          <Stack mt={'20px'}>
            <CustomButtonPrimary type='submit'>Create</CustomButtonPrimary>
          </Stack>
        </Box>
      </PaperContainer>
    </>
  );
}

export default NewProduct;
