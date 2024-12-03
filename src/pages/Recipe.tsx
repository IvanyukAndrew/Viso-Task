import React from 'react';
import { useParams } from 'react-router';
import { Meal } from '../models';

type Props = {
  meal: Meal | null;
};

export const Recipe: React.FC<Props> = ({ meal }) => {
  const extractIngridients = (recipe: Meal | null) => {
    const ingredients = [];

    if (recipe) {
      for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`]) {
          ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
        } else {
          break;
        }
      }
    }

    return ingredients;
  };

  const recipeIngredients = extractIngridients(meal);
  console.log(recipeIngredients);
  return (
    <div className=" my-4 flex justify-between">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-2xl">name: {meal?.strMeal}</div>
        <img className="size-60" src={meal?.strMealThumb} alt={meal?.strMeal} />
        <a className="mt-4 text-blue-900" href={meal?.strYoutube}>
          YouTube: {meal?.strYoutube}
        </a>
        <div className="text-2xl mb-2">Ingridients:</div>
        <ul>
          {recipeIngredients.map((ingridient, index) => (
            <li key={index}>{ingridient}</li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <div className="text-2xl">
          Instructions:<p className="mt-2 text-base">{meal?.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};
