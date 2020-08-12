import React from 'react';

import './style.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Filter = () => (
    <div className="filter">
        <div className="filter_selected">
            <span className="selected">Filter by Region</span>
            <MdKeyboardArrowDown size={20}/>
        </div>
    </div>
)