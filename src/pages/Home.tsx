import React from 'react';
import { Meal } from '../models';
import { ListMeals } from '../components/ListMeals';
import { Pagination } from '../components/Pagination';

interface Props {
  meals: Meal[];
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  setCurrentPage: (page: number) => void;
  setSearchMeal: (searchMeal: string) => void;
  findRecipeById: (id: string) => void;
}

export const Home: React.FC<Props> = ({
  meals,
  categories,
  activeCategory,
  setActiveCategory,
  setCurrentPage,
  findRecipeById,
  setSearchMeal,
}) => {
  if (!meals || !Array.isArray(meals)) {
    return <h1>Рецепти відсутні</h1>;
  }
  return (
    <div className="p-4 h-full">
      <div className=" py-2 w-full">
        <p className="font-bold text-lg">Категорії</p>
        <div className="mt-2 flex overflow-x-auto items-center justify-around gap-1 bg-gray-100 p-1 rounded-2xl h-15">
          {categories.map((category, index) => (
            <div
              onClick={() => setActiveCategory(category)}
              key={index}
              className="flex items-center font-bold h-11 rounded-2xl px-5">
              <div
                className={`flex items-center font-bold h-11 rounded-2xl ${
                  activeCategory === category
                    ? 'px-3 bg-white shadow-md shadow-gray-200 text-primary'
                    : ''
                }`}>
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Рецепти</h2>
      <ListMeals meals={meals} findRecipeById={findRecipeById} />
      <Pagination totalMeals={meals.length} setCurrentPage={setCurrentPage} postsPerPage={3} />
    </div>
  );
};
