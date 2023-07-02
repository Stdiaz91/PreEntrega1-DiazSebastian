import React from 'react'

function Search() {
  return (
    <div className='search__container'>
        <input id="search" type="search" className='search' required placeholder='Buscar por clase, marca o calibre'/>
        <div className='btn'>
            <i className="bi bi-search"></i>
        </div>
    </div>
  )
}

export default Search
