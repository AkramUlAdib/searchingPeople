import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange }) => {
    return(
        <div className='divbox'>
            <input className='box' type='search' placeholder='search here' onChange={searchChange} />
        </div>
        
    )
}

export default SearchBox;