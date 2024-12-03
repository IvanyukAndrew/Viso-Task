import React from 'react';
import { Meal } from '../models';
import { Link } from 'react-router';

interface Props {
  meal: Meal;
  findRecipeById: (id: string) => void;
}

export const ListItem: React.FC<Props> = ({ meal, findRecipeById }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);
  return (
    <li className="m-4 flex gap-4 border border-slate-900 rounded-2xl p-5">
      <img className="size-60" src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="">
        <div className="flex justify-between">
          <div className="font-bold text-lg">{meal.strMeal}</div>
          <div className="flex gap-4">
            <Link
              to={`/recipe/${meal.idMeal}`}
              onClick={() => findRecipeById(meal.idMeal)}
              className="p-1 border border-blue-400 bg-blue-300 shadow-md">
              Подробніше
            </Link>
            <button className="p-1 border border-green-400 bg-green-300 shadow-md">Вибрати</button>
          </div>
        </div>
        <div className="font-bold">{meal.strArea}</div>
        <p>
          {isExpanded ? meal.strInstructions : meal.strInstructions.slice(0, 700)}
          <span
            className="font-bold cursor-pointer text-blue-900"
            onClick={toggleText}
            role="button">
            {isExpanded ? '...Згорнути' : 'Розгорнути...'}
          </span>
        </p>
      </div>
    </li>
  );
};
