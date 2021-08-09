import React from 'react';
import "./SearchBox.styles.css";

export const SearchBox = ({placeholder, changeHandler}) => (
        <input 
            type="search" 
            placeholder = {placeholder} 
            className="search-box u-margin-bottom-medium" 
            onChange = {changeHandler}/>
        );