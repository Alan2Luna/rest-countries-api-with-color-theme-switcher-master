import React from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.scss'

export const ButtonBack = () => {
    const darkMode = useSelector(state => state.darkMode);

    let active = darkMode ? "dark-mode" : "";

    return(
        <Link className={`button__back ${active}`} to="/"><BsArrowLeft size={30} />Back</Link>
    )
}