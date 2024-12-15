import React from 'react';
import { useMeal } from '../hooks/useMeal';

type Props = {};

export const Recipe: React.FC<Props> = () => {
  // const maxLines = 20;
  const id = window.location.pathname.split('/')[2];
  const { data, ingredients, isLoading } = useMeal(id);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);

  if (isLoading) {
    return <h1 className="text-5xl font-bold text-center mt-20">Loading...</h1>;
  }

  if (!data) {
    return <h1 className="text-5xl font-bold text-center mt-20">Recipe not found</h1>;
  }

  return (
    <div className="my-20 max-w-4xl mx-auto">
      <div className="mb-5 flex justify-around">
        <div className="flex flex-col items-center">
          <img
            className="w-full size-[400px] rounded-xl"
            src={data?.strMealThumb}
            alt={data?.strMeal}
          />
        </div>
        <div className="w-1/2">
          <h2 className="mb-2 text-3xl">{data?.strMeal}</h2>
          <div>
            <a className="mt-4 text-blue-900" href={data?.strYoutube}>
              YouTube: {data?.strYoutube}
            </a>
          </div>
          <div className="text-2xl mb-2">Ingridients:</div>
          <ul>
            {ingredients.map((ingridient, index) => (
              <li key={index}>{ingridient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-lg ">
        Instructions:
        <p className={`mt-2 text-base ${isExpanded ? '' : 'line-clamp-5'}`}>
          {data?.strInstructions}
        </p>
        {data?.strInstructions.length > 100 && (
          <button onClick={toggleText} className="text-blue-500 hover:underline focus:outline-none">
            {isExpanded ? '...згорнути' : 'розгорнути...'}
          </button>
        )}
      </div>
    </div>
  );
};
