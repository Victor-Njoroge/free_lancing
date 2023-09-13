import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './SearchBar.css'
function SearchBar() {
  return (
    <div className='search_Box'>
        <h2>Find the right <i>freelance service</i>, right away</h2>
        <div className='input'>
            <input type="text"  placeholder='Search for any service ...'/>
            <button><i className="fa fa-search"></i></button>
        </div>

        <div className="popular">
            <span>Popular: </span>
            <button>Website</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>Ai Services</button>
        </div>
    </div>
  )
}

export default SearchBar