import { InputBase } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router';
import { TDetails } from '../models';

interface Props {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<TDetails>>;
}

export const Header: React.FC<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <header className="flex max-w-full h-20 items-center justify-between border-b border-black-900">
      <Link to="/" className="font-bold text-2xl">
        Technical Assignment. Front-end.
      </Link>
      <InputBase
        className="w-1/3 text-sm font-normal font-sans leading-5 px-3 py-1 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple dark:outline-dark-600 focus:shadow-lg border border-solid border-slate-300 hover:border-slate-500 dark:hover:border-slate-500 focus:border-slate-500 dark:focus:border-slate-600 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0'"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue((prev) => ({ ...prev, searchMeal: e.target.value }))}
      />
      <Link
        to="/cart"
        className="text-xl border-2 border-black- p-2 rounded-md cursor-pointer active:shadow-inner active:translate-y-1">
        Вибрані рецепти
      </Link>
    </header>
  );
};
