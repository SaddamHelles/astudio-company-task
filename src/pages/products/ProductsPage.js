import React, { useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';

const ProductsPage = () => {
  const { products, fetchProducts, perPages } = useDataContext();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return <DataGrid data={products} perPages={perPages} />;
};

export default ProductsPage;
