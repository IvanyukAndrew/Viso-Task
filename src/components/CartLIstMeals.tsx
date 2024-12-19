import React from 'react';
import { IIngredients, Meal } from '../models';
import { CartListItem } from './CartListItem';
import { useSelector } from 'react-redux';

type Props = {};

export const CartLIstMeals: React.FC<Props> = () => {
  const { meals, ingredients, totalItems } = useSelector((state: any) => state.cartMeals);

  const formatIngredientQuantities = (ingredient: IIngredients): string => {
    return ingredient.measurements.map((item) => `${item.quantity} ${item.unit}`).join(', ');
  };

  if (!meals.length) {
    return <h1 className="text-5xl font-bold text-center mt-20">Cart is empty</h1>;
  }
  return (
    <>
      <div className="w-full flex gap-4 mb-4">
        <ul className="w-3/5 m-auto flex flex-col gap-4 max-h-[26rem]  overflow-y-auto">
          {meals.map((meal: Meal) => (
            <CartListItem key={meal.idMeal} meal={meal} />
          ))}
        </ul>
        <ul className="w-2/5 border border-stone-900 rounded-xl p-4 max-h-[26rem]  overflow-y-auto">
          {ingredients.map((ingredient: IIngredients) => (
            <li className="flex justify-between" key={ingredient.name}>
              <div>{ingredient.name}</div>
              <div>{formatIngredientQuantities(ingredient)}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between border border-stone-900 rounded-xl gap-4 p-4 mb-4">
        <div className="font-bold text-lg">Итого: </div>
        <div className="font-bold text-lg">{totalItems} рецептів</div>
      </div>
    </>
  );
};
