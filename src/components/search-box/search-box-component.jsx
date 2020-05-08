import React from 'react';
import './search.style.css';

export const SearchBox = ({handleChange})=>(
    <div className="search"> 
    <input
    className='search-box'
    type="search"
    placeholder="search monsters"
    onChange={ handleChange}
    />
    </div>
);