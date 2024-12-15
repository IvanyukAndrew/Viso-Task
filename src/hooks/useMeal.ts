import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MealData } from '../models';
import React from 'react';

export function useMeal(id: string) {
  const getData = async () => {
    const response = await axios.get<MealData>(process.env.REACT_APP_BY_ID_URL + id);
    console.log('response', response);
    return response;
  };

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['meal', id],
    queryFn: getData,
    select: (data) => data.data.meals[0],
  });

  const ingredients = React.useMemo(() => {
    const result: string[] = [];
    if (data) {
      for (let i = 1; i <= 20; i++) {
        if (data[`strIngredient${i}`]) {
          result.push(`${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`);
        } else {
          break;
        }
      }
    }
    return result;
  }, [data]);

  console.log('ingredients', ingredients);

  return { data, ingredients, isLoading, isSuccess, isError };
}
