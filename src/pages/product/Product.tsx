import AddIcon from '@mui/icons-material/Add';

import ProductList from '../../components/product/ProductList';
import {PageHeader} from '../../styled/CustomTypography';
import {FlexBetween} from '../../styled/customFlexStyle';
import {CustomButtonPrimary} from '../../styled/customIconButton';
function Product() {
  return (
    <div>
      <FlexBetween>
        <PageHeader>Product</PageHeader>

        <CustomButtonPrimary startIcon={<AddIcon />}>
          New Product
        </CustomButtonPrimary>
      </FlexBetween>
      <ProductList />
    </div>
  );
}

export default Product;
