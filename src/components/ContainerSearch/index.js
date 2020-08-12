import React from 'react';

import './style.scss';
import { Search } from '../Search';
import { Filter } from '../Filter';

export const ContainerSearch = () => (
    <div className="container-search">
        <Search />
        <Filter />
    </div>
)