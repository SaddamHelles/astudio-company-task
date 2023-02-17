import fetchData from '../utils/fetchData';
import { createContext, useState, useCallback } from 'react';

const initialValue = {
  users: [],
  products: [],
  fetchUsers: () => {},
  fetchProducts: () => {},
  perPages: 3,
  perPagesHandler: () => {},
};

const DataContext = createContext(initialValue);

export const Provider = ({ children }) => {
  const [perPages, setPerPages] = useState(5);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const perPagesHandler = perPages => {
    setPerPages(perPages);
  };

  const fetchUsers = useCallback(async () => {
    const data = await fetchData(`users`);
    setUsers(
      data.users.map(user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        maidenName: user.maidenName,
        age: user.age,
        gender: user.gender,
        email: user.email,
        username: user.username,
        bloodGroup: user.bloodGroup,
        eyeColor: user.eyeColor,
        phone: user.phone,
        university: user.university,
        city: user.address.city,
        // image: user.image,
      }))
    );
  }, []);

  const fetchProducts = useCallback(async () => {
    const data = await fetchData(`products`);
    console.log('products data: ', data);
    setProducts(
      data.products.map(product => ({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail,
      }))
    );
  }, []);

  const contextOperations = {
    users,
    products,
    fetchUsers,
    fetchProducts,
    perPages,
    perPagesHandler,
  };

  return (
    <DataContext.Provider value={contextOperations}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
