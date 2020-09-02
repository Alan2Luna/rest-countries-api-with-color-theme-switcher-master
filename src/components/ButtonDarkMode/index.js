import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeDarkMode } from '../../actions';

import './style.scss'
import { IoMdMoon } from 'react-icons/io';
import { RiMoonLine } from 'react-icons/ri';


export const ButtonDarkMode = () => {

    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);

    const handleDarkMode = () => {
        dispatch(changeDarkMode())
    }

    return (
        <button className="button_darkmode" onClick={handleDarkMode}>
            { 
                darkMode
                    ? <RiMoonLine size={20} />
                    : <IoMdMoon size={20}/>
            }   
            <p>Dark Mode</p>
        </button>
    )
}
