import React, { Fragment, useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';
import filterData from '../../utils/filterData';
import { Box, CircularProgress } from '@mui/material';
import Filters from '../../components/filterGrid/Filters';

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

  return (
    <Fragment>
      <Filters />
      {loading && (
        <Box sx={{ textAlign: 'center', marginTop: '6rem' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && <DataGrid data={filteredProducts} perPages={perPages} />}
    </Fragment>
  );
};

export default ProductsPage;
