import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Blog.css'
import './AnimateOnScroll.css'
import { Category } from '../../components/index'
import { FaArrowRight } from 'react-icons/fa'
const Blog = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseLatest = await axios.get('http://127.0.0.1:8000/api/visit/bloglatest/');
        setLatestBlogs(responseLatest.data);

        const responseAll = await axios.get('http://127.0.0.1:8000/api/visit/blog/');
        setBlogs(responseAll.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className='blog'>
      <Category />
      <div className="container_blog">
        <h1 className='title_blog'>Blog insights</h1>
        <div className="row_blog">
          {latestBlogs.map(blog => (
            <div className="BlogHeader">
              <img src={blog.image} alt="BlogHeader1" className=' js-scroll fade-in' />
              <div className="post_card__infoys">
                <div className="post_date"><span>{formatDate(blog.post_date)}</span></div>
                <h2 className="blog_title">{blog.title}</h2>
                <p className='blog_des'>{blog.description}</p>
                <div className="read_more">
                  <span style={{ paddingRight: '10px' }}>Read more</span>
                  <FaArrowRight className='fa' />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col_blog">
          {blogs.map(blog => (
            <div className="card_blog">
              {/* animation_class"js-scroll fade-in" */}
              <img src={blog.image} alt="Blog1" className=' ' />
              <div className="post_card__infoys">
                <div className="post_date"><span>{formatDate(blog.post_date)}</span></div>
                <h2 className="blog_title">{blog.title}</h2>
                <p className='blog_des'>{blog.description}</p>
                <div className="read_more">
                  <span style={{ paddingRight: '10px' }}>Read more</span>
                  <FaArrowRight className='fa' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default Blog
