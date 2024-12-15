import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CategoryData } from '../models';

const categoryUrl = process.env.REACT_APP_CATEGORY_URL;
if (!categoryUrl) {
  throw new Error('REACT_APP_CATEGORY_URL is not defined in .env file');
}

const getData = async () => {
  const response = await axios.get<CategoryData>(categoryUrl);
  return response;
};

export function useCategory() {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['category'],
    queryFn: getData,
    select: (data) => data.data.categories || [],
  });

  let fullcategories: string[] = [];

  if (data) {
    fullcategories = ['All', ...data.map((category) => category.strCategory)];
  }

  return { categories: fullcategories, isLoadingCategory: isLoading, isSuccess, isError };
}
