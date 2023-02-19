import React, { Fragment, useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';
import filterData from '../../utils/filterData';
import { Box, CircularProgress } from '@mui/material';
import FilterGrid from '../../components/filterGrid/FilterGrid';

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
      <Box sx={{ textAlign: 'center', marginTop: '6rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Fragment>
      <FilterGrid />
      <DataGrid data={filteredProducts} perPages={perPages} />
    </Fragment>
  );
};

export default ProductsPage;
