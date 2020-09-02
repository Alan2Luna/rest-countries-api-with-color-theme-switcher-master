import React from 'react';
import { useSelector } from 'react-redux';

import { BorderCountries } from '../BorderCountries'

import './styles.scss'

export const DetailsContent = ({ country }) => {
    const darkMode = useSelector(state => state.darkMode);

    let active = darkMode ? "dark-mode" : "";
    
    return (
        <div className="details__content">
            <img src={country.flag} alt=""/>
            <div className={`details__box ${active}`}>
                <div className="details__text">
                    <h2>{country.name}</h2>
                    <div className="detail">
                        <div className="details__left">
                            <p><span>Native Name:</span> {country.nativeName}</p>
                            <p><span>Population:</span> {country.population}</p>
                            <p><span>Region:</span> {country.region}</p>
                            <p><span>Sub Region</span> {country.subregion}</p>
                            <p><span>Capital:</span> {country.capital}</p>
                        </div>
                        <div className="details__right">
                            <p><span>Top Level Domain:</span> {country.topLevelDomain[0]}</p>
                            <p><span>Currencies:</span> {country.currencies[0].name}</p>
                            <p><span>Languages: </span>
                            {country.languages.map(language => language.name + ", ")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="details__bordercountries">
                <p>
                    Border Countries:
                    {country.borders.map(country => <BorderCountries country={country} key={name} />)}
                </p>
            </div>
            </div>
            <span></span>
        </div>
    )
}
