import React, { useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';
import filterData from '../../utils/filterData';

const ProductsPage = () => {
  const { products, fetchProducts, perPages, searchTerm } = useDataContext();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let filteredProducts = products;
  if (searchTerm) {
    filteredProducts = filterData(products, searchTerm);
  }
  return <DataGrid data={filteredProducts} perPages={perPages} />;
};

export default ProductsPage;
