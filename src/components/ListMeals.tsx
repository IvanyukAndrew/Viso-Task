import React from 'react';
import { Meal } from '../models';
import { ListItem } from './ListItem';

interface Props {
  meals: Meal[];
  findRecipeById: (id: string) => void;
}

export const ListMeals: React.FC<Props> = ({ meals, findRecipeById }) => {
  return (
    <ul>
      {meals.map((meal) => (
        <ListItem key={meal.idMeal} meal={meal} findRecipeById={findRecipeById} />
      ))}
    </ul>
  );
};
