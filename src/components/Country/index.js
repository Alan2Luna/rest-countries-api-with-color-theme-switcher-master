import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss';

export const Country = ({ flag, name, population, region, capital }) => {

    const darkMode = useSelector(state => state.darkMode);

    let active = darkMode ? "dark-mode" : "";

    return (
        <Link to={`/details/${name}`} className={`country ${active}`}>
            <img src={ flag } alt={ name }/>
            <div className="country__description">
                <h2 className="country__name">{ name }</h2>
                <p className="country__p"><span>Population:</span> { population }</p>
                <p className="country__p"><span>Region:</span> { region }</p>
                <p className="country__p"><span>Capital:</span> { capital }</p>
            </div>
        </Link>
    )
}