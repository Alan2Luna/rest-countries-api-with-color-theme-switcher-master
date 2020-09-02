import React, { Fragment } from 'react';

import { ContainerSearch } from '../components/ContainerSearch';
import { ListOfCountries } from '../components/ListOfCountries';

export const Home = () => (
        <Fragment>
            <ContainerSearch />
            <ListOfCountries />
        </Fragment>
);
