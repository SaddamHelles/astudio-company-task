import React, { useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';
import filterData from '../../utils/filterData';
import { Box, CircularProgress } from '@mui/material';

const ProductsPage = () => {
  const { products, fetchProducts, perPages, searchTerm, loading } =
    useDataContext();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let filteredProducts = products;
  if (searchTerm) {
    filteredProducts = filterData(products, searchTerm);
  }

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return <DataGrid data={filteredProducts} perPages={perPages} />;
};

export default ProductsPage;
