import React, { useEffect, useState } from 'react';
import './Category.css';
import axios from 'axios';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  const baseUrl = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/visit/category/`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchCategories();
  }, [baseUrl]);

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className="category-header">
      <div className="category-header_shadow">
        <ul className="category-header_list">
          <li className="category-header_main">
            <Link to={`/blog`}>
              Blog
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id} className="category-header_item">
              <Link to={`/${category.name ? category.name.toLowerCase() : ''}`}>
                {category.name}
              </Link>
            </li>
          ))}
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
          <form className="search-field">
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
  );
};

export default Category;
