import React from 'react';
import Pagination from '@mui/material/Pagination';
import { ListMeals } from './ListMeals';
import { Meal } from '../models';

interface Props {
  className?: string;
  data: Meal[];
}

export const PaginatedRecipes: React.FC<Props> = ({ data }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const mealPerPage = 3;
  const countPage = Math.ceil(data.length / mealPerPage);
  const lastMealIndex = currentPage * mealPerPage;
  const firstMealIndex = lastMealIndex - mealPerPage;
  const currentMeals = data.slice(firstMealIndex, lastMealIndex);

  const handleChangePage = (value: number) => {
    setCurrentPage(value);
  };
  return (
    <div className="mt-4 h-full flex flex-col justify-between ">
      <div className="shadow-lg rounded-b-2xl pb-2 px-4">
        <h2 className=" ml-10 text-xl font-bold mb-4">Рецепти:</h2>
        <ListMeals meals={currentMeals} />
      </div>
      <Pagination
        className="flex justify-center mb-10"
        page={currentPage}
        onChange={(_, value) => handleChangePage(value)}
        siblingCount={1}
        size="large"
        count={countPage}
      />
    </div>
  );
};
