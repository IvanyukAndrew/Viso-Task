import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Meal } from '../models';

export function useMeals(searchMeal: string, activeCategory: string) {
  const [filteredData, setFilteredData] = React.useState<Meal[] | null>([]);

  const getData = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL + searchMeal);

    return response;
  };

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['meals', searchMeal],
    queryFn: getData,
    select: (data) => data.data.meals,
  });
  console.log('data', data);

  React.useMemo(() => {
    setFilteredData(
      !data
        ? []
        : activeCategory === 'All'
        ? data
        : data.filter((item: Meal) => item.strCategory === activeCategory),
    );
  }, [activeCategory, data]);

  return { data: filteredData, isLoading, isSuccess, isError };
}
