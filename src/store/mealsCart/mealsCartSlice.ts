import { types } from 'util';
import { IIngredients, Meal } from './../../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MealsCartState = {
  meals: Meal[];
  totalItems: number;
  ingredients: IIngredients[];
};

const initialState: MealsCartState = {
  meals: [] as Meal[],
  totalItems: 0,
  ingredients: [] as IIngredients[],
};

export const mealsCartSlice = createSlice({
  name: 'mealsCart',
  initialState,
  reducers: {
    addMeal: (state, action: PayloadAction<Meal>) => {
      if (state.meals.find((meal) => meal.idMeal === action.payload.idMeal)) return;

      state.meals.push(action.payload);
      state.totalItems += 1;

      for (let i = 1; i <= 20; i++) {
        const strIngredient = action.payload[`strIngredient${i}`];
        const strMeasure = action.payload[`strMeasure${i}`];

        if (!strIngredient || !strIngredient.trim()) continue;

        const ingredient = `${strIngredient.trim()} - ${strMeasure?.trim() || ''}`.trim();

        const existingIngredient = state.ingredients.find((item) => item.ingredient === ingredient);

        if (existingIngredient) {
          existingIngredient.quantity += 1;
        } else {
          state.ingredients.push({ ingredient, quantity: 1 });
        }
      }
    },

    removeMeal: (state, action) => {
      state.meals = state.meals.filter((meal) => meal.idMeal !== action.payload);
      state.totalItems -= 1;
    },
  },
});

export const { addMeal, removeMeal } = mealsCartSlice.actions;

export default mealsCartSlice.reducer;
