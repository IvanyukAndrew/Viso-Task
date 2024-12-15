import React from 'react';
import { Meal } from '../models';
import { CartListItem } from './CartListItem';
import { useSelector } from 'react-redux';

type Props = {};

export const CartLIstMeals: React.FC<Props> = () => {
  const { meals } = useSelector((state: any) => state.cartMeals);

  if (!meals.length) {
    return <h1 className="text-5xl font-bold text-center mt-20">Cart is empty</h1>;
  }
  return (
    <ul className="min-w-[55rem] m-auto">
      {meals.map((meal: Meal) => (
        <CartListItem key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
};
