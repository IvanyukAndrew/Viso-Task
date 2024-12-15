import { types } from 'util';
import { Meal } from './../../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MealsCartState = {
  meals: Meal[];
  totalItems: number;
};

const initialState: MealsCartState = {
  meals: [] as Meal[],
  totalItems: 0,
};

export const mealsCartSlice = createSlice({
  name: 'mealsCart',
  initialState,
  reducers: {
    addMeal: (state, action: PayloadAction<Meal>) => {
      if (state.meals.find((meal) => meal.idMeal === action.payload.idMeal)) return;

      state.meals.push(action.payload);
      state.totalItems += 1;
    },
    removeMeal: (state, action) => {
      state.meals = state.meals.filter((meal) => meal.idMeal !== action.payload);
      state.totalItems -= 1;
    },
  },
});

export const { addMeal, removeMeal } = mealsCartSlice.actions;

export default mealsCartSlice.reducer;
