import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './BlogDetails.css'
import './AnimateOnScroll.css'
import { FaCalendar, FaEye, FaTags } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { Category } from '../../components/index'
// import { dateFormate } from '../../utils/dateFormate';
import { Link, useParams } from 'react-router-dom';
import { dateFormate } from '../../utils/dateFormate';
const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/visit/blog/${id}/`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  return (
    <div className='blog'>
      <Category />
      {post && (
        <div className="blog_detail">
          <ul className='blog_detail_header'>
            <Link style={{ color: 'var(--main-color)' }} to={`/blog`}>Blog</Link>
            <li>{post?.category}</li>
          </ul>
          <div className="blog_detail_title">
            <h1 className='blog_detail_title_top'>{post.title}</h1>
            <p className='blog_detail_title_bio'>{post.bio}</p>
            <p className='blog_detail_title_date'><FaCalendar />{dateFormate(post.post_date)}</p>
          </div>
          <img src={post.image} alt={post.title} className='blog_detail_image' />
          <p className='blog_detail_desc'>{post.description}</p>
          <div className="blog_detail_footer">
            <p className='blog_detail_footer_content'><FaEye />{post.views_count}</p>
            <p className='blog_detail_footer_content'><TbCategoryPlus />{post.category}</p>
            <p className='blog_detail_footer_content'><FaTags />{post.tags}</p>
          </div>
        </div>
      )}
      {/* <Pagination /> */}
    </div>
  )
}

export default BlogDetails
