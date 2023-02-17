import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';

const ProductsPage = () => {
  const { products, fetchProducts, perPages } = useDataContext();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Box>
      {products.length && <DataGrid data={products} perPages={perPages} />}
    </Box>
  );
};

export default ProductsPage;
