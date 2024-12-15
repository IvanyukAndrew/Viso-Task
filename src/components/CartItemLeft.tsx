import React from 'react';
import { Meal } from '../models';

interface Props {
  meal: Meal;
}

export const CartItemLeft: React.FC<Props> = ({ meal }) => {
  return (
    <div className="flex gap-5">
      <img className="size-[90px] rounded-full" src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="flex flex-col justify-around">
        <div>
          <b>Name: </b>
          {meal.strMeal}
        </div>
        <div>
          <b>Category: </b> {meal.strCategory}
        </div>
        <div>
          <b>Country: </b> {meal.strArea}
        </div>
      </div>
    </div>
  );
};
