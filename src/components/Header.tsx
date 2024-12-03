import React from 'react';
import { Link } from 'react-router';

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const Header: React.FC<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <header className="flex max-w-full h-20 items-center justify-between border-b border-black-900">
      <Link to="/" className="font-bold text-2xl">
        Technical Assignment. Front-end.
      </Link>
      <input
        className="bg-gray-50 border text-sm rounded-lg w-1/3 pl-11"
        placeholder="Search..."
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Link
        to="/cart"
        className="text-xl border-2 border-black- p-2 rounded-md cursor-pointer active:shadow-inner active:translate-y-1">
        Вибрані рецепти
      </Link>
    </header>
  );
};
