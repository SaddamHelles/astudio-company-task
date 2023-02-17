import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import FilterGrid from './components/filterGrid/FilterGrid';
import { useDataContext } from './hooks/use-data-context';
import UsersPage from './pages/users/UsersPage';
import ProductsPage from './pages/products/ProductsPage';
import Navbar from './components/nav/Navbar';

function App() {
  const { fetchUsers } = useDataContext();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className="App">
      <Navbar />
      <FilterGrid />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>Welcome Page</h2>
            </>
          }
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
