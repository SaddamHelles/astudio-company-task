import fetchData from '../utils/fetchData';
import { createContext, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const initialValue = {
  users: [],
  products: [],
  searchTerm: '',
  perPages: 3,
  loading: false,
  reset: () => {},
  queryHandler: term => {},
  searchTermHandler: term => {},
  fetchUsers: () => {},
  fetchProducts: () => {},
  perPagesHandler: () => {},
};

const DataContext = createContext(initialValue);

export const Provider = ({ children }) => {
  const location = useLocation();
  const [perPages, setPerPages] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  const perPagesHandler = perPages => {
    setPerPages(perPages);
  };
  const reset = () => {
    setPerPages(5);
    setSearchTerm('');
  };

  const fetchUsers = useCallback(async () => {
    setLoading(true);
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
    setUsers(allUsers);
    setLoading(false);
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);

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
    }));
    setProducts(allProducts);
    setLoading(false);
  }, []);

  const searchTermHandler = term => {
    setSearchTerm(term);
  };

  const queryHandler = async query => {
    try {
      setLoading(true);
      const data = await fetchData(`${query}`);

      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
    }
  };

  const contextOperations = {
    users,
    products,
    fetchUsers,
    searchTerm,
    perPages,
    loading,
    fetchProducts,
    perPagesHandler,
    searchTermHandler,
    queryHandler,
    reset,
  };

  return (
    <DataContext.Provider value={contextOperations}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
