import React, { act } from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Category, Meal, MealData } from './models';
import { Home } from './pages/Home';
import { Recipe } from './pages/Recipe';
import { Cart } from './pages/Cart';
import { f } from 'react-router/dist/development/fog-of-war-DU_DzpDb';

function App() {
  const [meals, setMeals] = React.useState<Meal[]>([]);
  const [meal, setMeal] = React.useState<Meal | null>(null);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [filteredMeals, setFilteredMeals] = React.useState<Meal[]>([]);
  const [searchMeal, setSearchMeal] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [mealPerPage, setMealPerPage] = React.useState(3);

  const lastMealIndex = currentPage * mealPerPage;
  const firstMealIndex = lastMealIndex - mealPerPage;

  const link = searchMeal
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchMeal
    : 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

  const findRecipeById = (id: string) => {
    const recipe = meals.find((meal) => meal.idMeal === id);
    if (recipe) {
      setMeal(recipe);
    }
  };

  React.useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, [searchMeal, link]);

  React.useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) =>
        setCategories([
          'All',
          ...data.categories.map((category: Category) => category.strCategory),
        ]),
      );
  }, []);

  React.useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredMeals(meals);
    } else {
      const filtered = meals.filter((meal) => meal.strCategory === activeCategory);
      setFilteredMeals(filtered);
    }
  }, [activeCategory, meals]);

  return (
    <Router>
      <div className="max-w-5xl mx-auto">
        <Header searchValue={searchMeal} setSearchValue={setSearchMeal} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                meals={filteredMeals}
                setCurrentPage={setCurrentPage}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                setSearchMeal={setSearchMeal}
                findRecipeById={findRecipeById}
              />
            }
          />
          <Route path="/recipe/:id" element={<Recipe meal={meal} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
