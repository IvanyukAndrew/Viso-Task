import { Meal } from '../models';
import { CartItemLeft } from './CartItemLeft';
import { CartItemRight } from './CartItemRight';

interface Props {
  meal: Meal;
}

export const CartListItem = ({ meal }: Props) => {
  return (
    <li className="flex justify-between border border-stone-900 rounded-xl gap-4 p-4">
      <CartItemLeft meal={meal} />
      <CartItemRight meal={meal} />
    </li>
  );
};
