import { CartLIstMeals } from '../components/CartLIstMeals';

type Props = {};

export const Cart = (props: Props) => {
  // if (!meals.length) {
  //   return <h1 className="text-5xl font-bold text-center mt-20">Cart is empty</h1>;
  // }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl my-4">Вибрані рецепти:</h2>
      <CartLIstMeals />
    </div>
  );
};
