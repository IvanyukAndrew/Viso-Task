import React from 'react';

interface Props {
  totalMeals: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ setCurrentPage, totalMeals, postsPerPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalMeals / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 justify-center mt-4">
      {pages.map((page, index) => (
        <button
          className="w-10 h-10 font-bold mx-2 border-2 border-black rounded-md cursor-pointer bg-transparent"
          onClick={() => setCurrentPage(page)}
          key={index}>
          {page}
        </button>
      ))}
    </div>
  );
};
