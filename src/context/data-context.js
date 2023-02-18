import fetchData from '../utils/fetchData';
import { createContext, useState, useCallback } from 'react';

const initialValue = {
  users: [],
  products: [],
  searchTerm: '',
  perPages: 3,
  reset: () => {},
  searchTermHandler: term => {},
  fetchUsers: () => {},
  fetchProducts: () => {},
  perPagesHandler: () => {},
};

const DataContext = createContext(initialValue);

export const Provider = ({ children }) => {
  const [perPages, setPerPages] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const perPagesHandler = perPages => {
    setPerPages(perPages);
  };
  const reset = () => {
    setPerPages(5);
    setSearchTerm('');
  };
  const filterData = useCallback(
    data => {
      const filteredData = data.filter(item =>
        Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      return filteredData;
    },
    [searchTerm]
  );

  const fetchUsers = useCallback(async () => {
    const data = await fetchData(`users`);
    const allUsers = data.users.map(user => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      maidenName: user.maidenName,
      birthDate: user.birthDate,
      gender: user.gender,
      email: user.email,
      username: user.username,
      bloodGroup: user.bloodGroup,
      eyeColor: user.eyeColor,
      phone: user.phone,
      university: user.university,
      city: user.address.city,
    }));

    if (searchTerm) setUsers(filterData(allUsers));
    else setUsers(allUsers);
  }, [searchTerm, filterData]);

  const searchTermHandler = term => {
    setSearchTerm(term);
  };

  const fetchProducts = useCallback(async () => {
    const data = await fetchData(`products`);
    const allProducts = data.products.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discount: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      // thumbnail: product.thumbnail,
    }));

    if (searchTerm) setProducts(filterData(allProducts));
    else setProducts(allProducts);
  }, [searchTerm, filterData]);

  const contextOperations = {
    users,
    products,
    fetchUsers,
    fetchProducts,
    perPages,
    perPagesHandler,
    searchTerm,
    searchTermHandler,
    reset,
  };

  return (
    <DataContext.Provider value={contextOperations}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
