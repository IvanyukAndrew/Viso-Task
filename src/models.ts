export interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  [key: string]: string;
}

export interface ICategory {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
export interface IIngredients {
  name: string;
  measurements: { unit: string; quantity: number }[];
}

export interface CategoryData {
  categories: ICategory[];
}

export interface MealData {
  meals: Meal[];
}

export type TDetails = {
  activeCategory: string;
  searchMeal: string;
};
