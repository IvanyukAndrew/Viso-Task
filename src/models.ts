export interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  [key: string]: string | null;
}

export interface ICategory {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
export interface IIngredients {
  ingredient: string;
  quantity: number;
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
