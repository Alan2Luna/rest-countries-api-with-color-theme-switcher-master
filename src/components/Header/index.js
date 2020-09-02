import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';
import { ButtonDarkMode } from '../ButtonDarkMode';

export const Header = () => {
    const darkMode = useSelector(state => state.darkMode);

    let active = darkMode ? "dark-mode" : "";

    return (
        <div className={`header ${active}`}>
            <h3 className="header__title">Where in the world?</h3>
            
            <ButtonDarkMode />
        </div>
    )
}