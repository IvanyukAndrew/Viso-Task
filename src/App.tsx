import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Recipe } from './pages/Recipe';
import { Cart } from './pages/Cart';
import { TDetails } from './models';

function App() {
  const [details, setDetails] = React.useState<TDetails>({
    activeCategory: 'All',
    searchMeal: '',
  });

  return (
    <Router>
      <div className="max-w-6xl h-full mx-auto  ">
        <Header searchValue={details.searchMeal} setSearchValue={setDetails} />

        <Routes>
          <Route path="/" element={<Home details={details} setDetails={setDetails} />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
