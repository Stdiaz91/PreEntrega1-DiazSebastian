//styles
import './Search.css';

//components
import React from 'react';

const Search = ({search, handleChangeSearch}) => {
  return (
    <div className='search__container'>
        <input  id="search"
                type="search"
                className='search' 
                placeholder='Buscar por clase, marca o calibre'
                value={search}
                onChange={handleChangeSearch}
        />
        <div className='btn'>
            <i className="bi bi-search"></i>
        </div>
    </div>
  )
}

export default Search
