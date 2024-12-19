import { IIngredients, Meal } from './../../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { parseMeasure } from '../../helper/parseMeasureToUnitAndQuantity';

interface MealsCartState {
  meals: Meal[];
  totalItems: number;
  ingredients: IIngredients[];
}

const initialState: MealsCartState = {
  meals: [],
  totalItems: 0,
  ingredients: [],
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
        const ingredient = action.payload[`strIngredient${i}`];
        const measure = action.payload[`strMeasure${i}`];

        if (!ingredient) continue;

        const { quantity, unit } = parseMeasure(measure);

        const existingIngredient = state.ingredients.find((item) => item.name === ingredient);

        if (existingIngredient) {
          const existingMeasure = existingIngredient.measurements.find(
            (item) => item.unit === unit,
          );

          if (existingMeasure) {
            existingMeasure.quantity += quantity;
          } else {
            existingIngredient.measurements.push({ unit, quantity });
          }
        } else {
          state.ingredients.push({ name: ingredient, measurements: [{ unit, quantity }] });
        }
      }
    },

    removeMeal: (state, action) => {
      const meal = state.meals.find((meal) => meal.idMeal === action.payload);
      console.log('meal', meal);

      if (!meal) return;

      state.meals = state.meals.filter((meal) => meal.idMeal !== action.payload);
      state.totalItems -= 1;

      for (let i = 1; i <= state.ingredients.length; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        console.log('remove', ingredient, measure);

        if (!ingredient) continue;
        const { quantity, unit } = parseMeasure(measure);

        const existingIngredient = state.ingredients.find((item) => item.name === ingredient);

        if (existingIngredient) {
          const existingMeasure = existingIngredient.measurements.find(
            (item) => item.unit === unit,
          );

          if (existingMeasure) {
            existingMeasure.quantity -= quantity;

            if (existingMeasure.quantity <= 0) {
              existingIngredient.measurements = existingIngredient.measurements.filter(
                (item) => item.unit !== unit,
              );
            }
          }

          if (existingIngredient.measurements.length === 0) {
            state.ingredients = state.ingredients.filter((item) => item.name !== ingredient);
          }
        }
      }
    },
  },
});

export const { addMeal, removeMeal } = mealsCartSlice.actions;

export default mealsCartSlice.reducer;
