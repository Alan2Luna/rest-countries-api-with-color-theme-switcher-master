import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries } from '../../actions';

import './style.scss';
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

export const FilterOptions = ({ option, handleFilter }) => {
    return (
        <p className="filter__p" onClick={handleFilter}>{option}</p>
    )
}

export const Filter = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);

    const handleFilter = e => {
        setFilter(e.target.textContent)
        dispatch(filterCountries(e.target.textContent));
    }

    const [isOpen, setIsOpen ] = useState(false);
    const [filter, setFilter ] = useState(null);
    const continentOptions = ["All", "Africa", "Americas", "Asia", "Europe","Oceania"];

    const selectedOption = filter ? `${filter}` : "Filter by Region"; 
    const activeClass = isOpen ? "active" : "";
    let active = darkMode ? "dark-mode" : "";

    return (
        <div className={`filter ${active}`} onClick={() => { setIsOpen(!isOpen) }}>
            <div className="filter__selected">
                <span className="selected">{selectedOption}</span>
                { isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
            </div>
            <div className={`filter__options ${activeClass}`}>
                { continentOptions.map(option => <FilterOptions key={option} option={option} handleFilter={handleFilter}/>)}
            </div>
        </div>
    )
}