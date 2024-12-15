import React from 'react';
import { Meal } from '../models';
import { ListItem } from './ListItem';

interface Props {
  meals: Meal[];
}

export const ListMeals: React.FC<Props> = ({ meals }) => {
  return (
    <ul className="w-full grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 mb-2">
      {meals.map((meal) => (
        <ListItem key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
};
