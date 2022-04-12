import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCountries } from '../../actions';

import './style.scss';
import { Country } from '../Country';
import { Spinner } from '../Spinner';

export const ListOfCountries = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const countries = useSelector(state => {
        switch (state.action) {
            case 'countries_downloaded':
                return state.countries
            case 'filter_by_name':
                return state.filterByName
            case 'filter_by_name_and_region':
                return state.filterByName
            case 'filter_by_region':
                return state.filterByRegion
            case 'initialState':
                return state.countries
            default:
                return null
        }
    });

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => {
                dispatch(listCountries(res))
                setLoading(false)
            })
            .catch(() => {
                console.log(error)
            })
    }, [])

    return (
        <div className="container__countries">
            { 
                loading 
                    ? <Spinner />
                    : countries.map(country => <Country key={country.name} {...country}/>)
            }
        </div>
    )
}
