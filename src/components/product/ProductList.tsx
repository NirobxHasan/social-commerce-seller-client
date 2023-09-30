import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Box, IconButton, Switch, Typography} from '@mui/material';
import {FlexBetween} from '../../styled/customFlexStyle';
import CustomDataGrid from '../ui-componets/CustomDataGrid';
function ProductList() {
  const getRowClassName = (params) => {
    if (params.row.id === 1) {
      return 'custom-row'; // Apply the custom class to the first row
    }
    return ''; // Return an empty string for other rows
  };
  const getRowHeight = () => {
    return 100; // Set the desired row height (in pixels)
  };
  return (
    <Box sx={{width: '100%', marginTop: '2em'}}>
      <CustomDataGrid rows={rows} columns={columns} />
    </Box>
  );
}

export default ProductList;
const rows = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 1',
    sku: 'SKU001',
    price: 10.99,
    discount_price: 10,
    status: true,
    category: 'Category A',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 2',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Product 3',
    sku: 'SKU002',
    price: 19.99,
    discount_price: 10,
    status: false,
    category: 'Category B',
  },
  // Add more products as needed
];

// Columns for the DataGrid
const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 360,
    renderCell: (params) => (
      <FlexBetween gap={3}>
        <img
          style={{
            height: '80px',
            width: '80px',
            objectFit: 'cover',
            borderRadius: '10%',
          }}
          src={params.row.image}
        />

        <Typography>{params.row.name}</Typography>
      </FlexBetween>
    ),
  },

  {field: 'price', headerName: 'Regular Price', width: 150},
  {field: 'discount_price', headerName: 'Discount Price', width: 150},
  {field: 'sku', headerName: 'SKU', width: 120},
  {
    field: 'status',
    headerName: 'Status',
    width: 120,

    renderCell: (params) => (
      <Switch
        color='primary'
        checked={params.row.status}
        readOnly
        size='small'
      />
    ),
  },
  {field: 'category', headerName: 'Category', width: 150},
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <div>
        <IconButton color='primary'>
          <EditIcon />
        </IconButton>
        <IconButton color='secondary'>
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];
