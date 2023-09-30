import {DataGrid, DataGridProps} from '@mui/x-data-grid';

function CustomDataGrid(props: DataGridProps) {
  const {rows, columns} = props;
  const getRowHeight = () => {
    return 100; // Set the desired row height (in pixels)
  };
  return (
    <DataGrid
      {...props}
      sx={{
        borderRadius: '15px',
        boxShadow: 2,
      }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[15]}
      getRowHeight={getRowHeight}
    />
  );
}

export default CustomDataGrid;
