import { Route, Routes } from 'react-router-dom';
import FilterGrid from './components/filterGrid/FilterGrid';
import UsersPage from './pages/users/UsersPage';
import ProductsPage from './pages/products/ProductsPage';
import Navbar from './components/nav/Navbar';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterGrid />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
