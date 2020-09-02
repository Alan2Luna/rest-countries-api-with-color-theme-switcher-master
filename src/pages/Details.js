import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Spinner } from '../components/Spinner';
import { Details } from '../components/details';

export const DetailsPage = () => {

    let [loading, setLoading] = useState(true);
    let { name } = useParams();

    let country = useSelector(state => state.countries.find(country => country.name.toLowerCase() === name.toLowerCase()));
    useEffect(() => {
        setLoading(false)
    }, [])

    return(
        <Fragment>
            {
                loading
                    ? <Spinner/>
                    : <Details country={country} />
            }
        </Fragment>
    )
}