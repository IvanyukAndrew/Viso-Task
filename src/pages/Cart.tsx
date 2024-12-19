import { CartLIstMeals } from '../components/CartLIstMeals';

type Props = {};

export const Cart = (props: Props) => {


  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl my-4">Вибрані рецепти:</h2>
      <CartLIstMeals />
    </div> 
  );
};
