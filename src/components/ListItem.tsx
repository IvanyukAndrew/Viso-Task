import React from 'react';
import { Meal } from '../models';
import { Link } from 'react-router';
import { Button } from '@mui/material';
import { addMeal } from '../store/mealsCart/mealsCartSlice';
import { useTypedDispatch } from '../hooks/useTypedDispatch';

interface Props {
  meal: Meal;
}

export const ListItem: React.FC<Props> = ({ meal }) => {
  const dispatch = useTypedDispatch();
  const handleClickToAddMeal = (item: Meal) => {
    dispatch(addMeal({ ...item }));
    console.log(item);
  };

  return (
    <li className="max-w-2xl m-4 flex flex-col justify-between items-center gap-4 border border-slate-900 rounded-2xl p-5 shadow-md">
      <img
        className="w-[190px] h-[190px] rounded-full"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <div className="">
        <div className="flex flex-col items-center gap-3">
          <div className="font-bold text-lg">name: {meal.strMeal}</div>
          <div className="font-bold">Country: {meal.strArea}</div>
          <div className="flex gap-4">
            <Link to={`/recipe/${meal.idMeal}`}>
              <Button variant="contained">Подробніше</Button>
            </Link>
            <Button
              variant="outlined"
              onClick={() => handleClickToAddMeal({ ...meal })}
              className="w-1/2 border border-green-400 bg-green-300 shadow-md">
              Вибрати
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
function useAppDispatch() {
  throw new Error('Function not implemented.');
}
