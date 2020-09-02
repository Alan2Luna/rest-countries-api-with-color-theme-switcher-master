import React from 'react';

import './styles.scss';

import { ButtonBack } from '../ButtonBack'
import { DetailsContent } from '../DetailsContent'

export const Details = ({ country }) => (
    <div className="container__details">
        <ButtonBack />
        <DetailsContent country={country}/>
    </div>
)