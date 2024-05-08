import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Blog.css'
import './AnimateOnScroll.css'
import { Category } from '../../components/index'
import { FaArrowRight } from 'react-icons/fa'
import { dateFormate } from '../../utils/dateFormate';
const Blog = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const baseUrl = "http://127.0.0.1:8000"
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseAll = await axios.get(`${baseUrl}/api/visit/blog/`);
        const filterData = responseAll.data.slice(2);
        setBlogs(filterData);
        const lastestRemainng = responseAll.data.slice(0, 2);
        setLatestBlogs(lastestRemainng)
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
        <div className="row_blog ">
          {latestBlogs.map(blog => {
            return (
              <div className="BlogHeader">
                <img src={blog.image} alt="BlogHeader1" className=' js-scroll fade-in' />
                <div className="post_card__infoys">
                  <div className="post_date"><span>{dateFormate(blog.post_date)}</span></div>
                  <h2 className="blog_title">{blog.title}</h2>
                  <p className='blog_des'>{blog.description}</p>
                  <p className='blog_des'>{blog.category.name}</p>
                  <div className="read_more">
                    <span style={{ paddingRight: '10px' }}>Read more</span>
                    <FaArrowRight className='fa' />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="col_blog">
          {blogs.map(blog => (
            <div className="card_blog">
              {/* animation_class"js-scroll fade-in" */}
              <img src={blog.image} alt="Blog1" className=' ' />
              <div className="post_card__infoys">
                <div className="post_date"><span>{dateFormate(blog.post_date)}</span></div>
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
