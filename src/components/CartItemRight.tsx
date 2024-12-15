import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Meal } from '../models';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { removeMeal } from '../store/mealsCart/mealsCartSlice';

interface Props {
  meal: Meal;
  handleClickRemoveMeal?: (id: string) => void;
}

export const CartItemRight: React.FC<Props> = ({ meal }) => {
  const dispatch = useTypedDispatch();
  const handleClickRemoveMeal = (id: string) => {
    dispatch(removeMeal(id));
  };
  return (
    <div className="flex flex-col gap-2">
      <Link to={`/recipe/${meal.idMeal}`}>
        <Button className="w-30 h-10" variant="contained">
          Подробніше
        </Button>
      </Link>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleClickRemoveMeal(meal.idMeal)}
        className="h-10 border shadow-md">
        Видалити
      </Button>
    </div>
  );
};
