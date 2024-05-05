import React, { useState } from 'react'
import './Category.css'
import { FaSearch, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Category = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible); // Toggle the visibility state
  };
  return (
    <div className='category-header'>
      <div className="category-header_shadow">
        <ul className="category-header_list">
          <li className='category-header_main'><Link to='/blog'>Blog</Link></li>
          <li className="category-header_item">Product</li>
          <li className="category-header_item">Team</li>
          <li className="category-header_item">Engineering</li>
          <li className="category-header_item">Data and AI</li>
          <li className="category-header_item">DevOps</li>
          <li className="category-header_item">Design</li>
          <li className="category-header_item">Lifa at Teachnology</li>
          <li className="category-header_item">News</li>
          <li className="category-header_item">Healthcare</li>
          <li className="category-header_item">Healthcare</li>
          <li className="category-header_item">Healthcare</li>
        </ul>
      </div>
      <div className="category-header_search">
        <button className="button-search" onClick={toggleInputVisibility}>
          {isInputVisible ? (
            <FaTimes color="#000" size={18} />
          ) : (
            <FaSearch color="#000" size={18} />
          )}
        </button>
        {isInputVisible && (
          <form className='search-field'>
            <input
              type="text"
              className="search-input"
              placeholder="Search Keyboard..."
            />
            <button type="submit" className="submit">
              <FaSearch size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Category
