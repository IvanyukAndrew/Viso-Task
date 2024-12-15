import React from 'react';
import { TDetails } from '../models';

interface Props {
  categories: string[];
  setDetails: React.Dispatch<React.SetStateAction<TDetails>>;
  activeCategory: string;
}

export const Category: React.FC<Props> = ({ categories, setDetails, activeCategory }) => {
  return (
    <div className=" w-full">
      <p className="font-bold text-lg">Категорії</p>
      <div className="mt-2 flex overflow-x-auto custom-scrollbar items-center justify-around gap-1 bg-gray-100 p-1 rounded-2xl h-15">
        {categories.map((category, index) => (
          <div
            onClick={() => setDetails((prev) => ({ ...prev, activeCategory: category }))}
            key={index}
            className="flex items-center font-bold h-11 rounded-2xl px-5">
            <div
              className={`flex items-center font-bold h-11 rounded-2xl ${
                activeCategory === category
                  ? 'px-3 bg-white shadow-md shadow-gray-200 text-primary'
                  : ''
              }`}>
              {category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
