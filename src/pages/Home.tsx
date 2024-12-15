import React from 'react';
import { Category } from '../components/Category';
import { useMeals } from '../hooks/useMeals';
import { useCategory } from '../hooks/useCategory';
import { PaginatedRecipes } from '../components/PaginatedRecipes';
import { TDetails } from '../models';
import { useDebounce } from 'react-use';

interface Props {
  details: TDetails;
  setDetails: React.Dispatch<React.SetStateAction<TDetails>>;
}

export const Home: React.FC<Props> = ({ details, setDetails }) => {
  const [debounceSearch, setDebounceSearch] = React.useState('');
  const { categories, isLoadingCategory } = useCategory();

  useDebounce(
    () => {
      setDebounceSearch(details.searchMeal);
    },
    300,
    [details.searchMeal],
  );

  const { data, isLoading } = useMeals(debounceSearch, details.activeCategory);

  return (
    <div className="py-2 h-full">
      {!isLoadingCategory && (
        <Category
          categories={categories}
          setDetails={setDetails}
          activeCategory={details.activeCategory}
        />
      )}
      {isLoading ? (
        <h1 className="text-5xl font-bold text-center mt-20">Loading...</h1>
      ) : data?.length ? (
        <PaginatedRecipes data={data} />
      ) : (
        <h1 className="text-5xl font-bold text-center mt-20">Рецепти відсутні!!!</h1>
      )}
    </div>
  );
};
