import React from 'react';

import { MdSearch } from 'react-icons/md';
import './style.scss';

export const Search = () => (
    <div className="search">
        <MdSearch size={22} />
        <input className="search__input" placeholder="Search for a contry..."></input>
    </div>
)