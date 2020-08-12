import React from 'react';

import './styles/global.scss';

import { Header } from './components/Header';
import { ContainerSearch } from './components/ContainerSearch';

export const App = () => (
    <div className="app">
        <Header />
        <ContainerSearch />
    </div>
)