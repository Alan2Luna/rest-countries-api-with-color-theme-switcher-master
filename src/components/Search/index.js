import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countrySearch } from '../../actions';

import { MdSearch } from 'react-icons/md';
import './style.scss';

export const Search = () => {

    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        dispatch(countrySearch(e.target.value));
        console.log(e.target.value)
    }

    let active = darkMode ? "dark-mode" : "";

    return (
        <form className={`search ${active}`} onSubmit={handleSubmit}>
            <MdSearch size={22} />
            <input 
                className="search__input" 
                placeholder="Search for a contry..." 
                onChange={handleChange}
            ></input>
        </form>
    )
}