import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './MenuBar.style.scss';


const MenuBar = () => {
    return (
        <nav className='menubar'>
            <h1>Users API</h1>
            <SearchBar />
        </nav>
    );
};

export default MenuBar;