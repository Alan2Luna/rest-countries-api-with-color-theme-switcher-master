import React from 'react';

import './style.scss';
import { Search } from '../Search';
import { Filter } from '../Filter';

export const ContainerSearch = ({ handleChange, handleFilter, filter}) => (
    <div className="container-search">
        <Search handleChange={handleChange} />
        <Filter handleFilter={handleFilter} filter={filter}/>
    </div>
)