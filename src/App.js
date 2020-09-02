import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/global.scss';
import { useSelector } from 'react-redux';

import { Header } from './components/Header';
import { Home } from './pages/Home.js';
import { DetailsPage } from './pages/Details.js';


export const App = () => {
    const darkMode = useSelector(state => state.darkMode);

    let active = darkMode ? "dark-mode" : "";

    return (
        <BrowserRouter> 
            <div className={`app ${active}`}>
                <Header />
                <Switch> 
                    <Route path="/" exact component={Home} />
                    <Route path="/details/:name" component={DetailsPage} />
                </Switch> 
            </div>
        </BrowserRouter> 
    )
}