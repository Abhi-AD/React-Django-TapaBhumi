import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Blog.css'
import './AnimateOnScroll.css'
import { Category } from '../../components/index'
import { FaArrowRight } from 'react-icons/fa'
import { dateFormate } from '../../utils/dateFormate';
import { Link } from 'react-router-dom';
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
          {latestBlogs.map(blog => (
            <div className="BlogHeader" key={blog.id}>
              <img src={blog.image} alt="BlogHeader" className='js-scroll fade-in' />
              <div className="post_card__infoys">
                <div className="post_date"><span>{dateFormate(blog.post_date)}</span></div>
                <h2 className="blog_title">{blog.title}</h2>
                <p className='blog_des'>{blog.bio.slice(0, 150)+'....'}</p>
                <p className='blog_des'>Category: {blog.category?.name}</p>
                <Link className="read_more" to={`/blog/${blog.id}`}>
                  <span style={{ paddingRight: '10px' }}>Read more</span>
                  <FaArrowRight className='fa' />
                </Link>
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
                <div className="post_date"><span>{dateFormate(blog.post_date)}</span></div>
                <h2 className="blog_title">{blog.title}</h2>
                <p className='blog_des'>{blog.bio.slice(0, 150)+'....'}</p>
                <Link className="read_more" to={`/blog/${blog.id}`}>
                  <span style={{ paddingRight: '10px' }}>Read more</span>
                  <FaArrowRight className='fa' />
                </Link>
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
