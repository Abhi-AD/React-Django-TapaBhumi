import React from 'react'
import './Blog.css'
import './AnimateOnScroll.css'
import { BlogHeader1, BlogHeader2, Blog1, Blog2, Blog3, Blog4, Blog5, Blog6 } from './imports'
import { Category, Pagination } from '../../components/index'
import { FaArrowRight } from 'react-icons/fa'
const Blog = () => {
  return (
    <div className='blog'>
      <Category />
      <div className="container_blog">
        <h1 className='title_blog'>Blog insights</h1>
        <div className="row_blog">
          <div className="BlogHeader">
            <img src={BlogHeader1} alt="BlogHeader1" className=' js-scroll fade-in' />
            <div className="post_card__infoys">
              <div className="post_date"><span>march 29, 2024</span></div>
              <h2 className="blog_title">Decoding Software Engineering fellowship: FAQs and tips</h2>
              <p className='blog_des'>With every announcement post of our fellowship, we have been stacked with messages and inquiries through different platforms. Is it virtual? Are there any qualifications required? I am still in college, can I apply? The list goes on.</p>
              <div className="read_more">
                <span style={{ paddingRight: '10px' }}>Read more</span>
                <FaArrowRight className='fa' />
              </div>
            </div>
          </div>
          <div className="BlogHeader">
            <img src={BlogHeader2} alt="BlogHeader2" className=' js-scroll fade-in' />
            <div className="post_card__infoys">
              <div className="post_date"><span>march 29, 2024</span></div>
              <h2 className="blog_title">Internship to Fellowship - Jumpstart your career with us!                </h2>
              <p className='blog_des'>From crafting dazzling rebrands, expanding our operational horizons, and fine-tuning our services, Leapfrog has evolved progressively throughout the years.</p>              <div className="read_more">
                <span style={{ paddingRight: '10px' }}>Read more</span>
                <FaArrowRight className='fa' />
              </div>
            </div>
          </div>
        </div>
        <div className="col_blog">
          <div className="card_blog">
            <img src={Blog1} alt="Blog1" className=' js-scroll fade-in' />
            <div className="post_card__infoys">
              <div className="post_date"><span>march 29, 2024</span></div>
              <h2 className="blog_title">Decoding Software Engineering fellowship: FAQs and tips</h2>
              <p className='blog_des'>With every announcement post of our fellowship, we have been stacked with messages and inquiries through different platforms. Is it virtual? Are there any qualifications required? I am still in college, can I apply? The list goes on.</p>
              <div className="read_more">
                <span style={{ paddingRight: '10px' }}>Read more</span>
                <FaArrowRight className='fa' />
              </div>
            </div>
          </div>
          <div className="card_blog">
            <img src={Blog2} alt="Blog2" className=' js-scroll fade-in' />
            <div className="post_card__infoys">
              <div className="post_date"><span>march 29, 2024</span></div>
              <h2 className="blog_title">Internship to Fellowship - Jumpstart your career with us!                </h2>
              <p className='blog_des'>From crafting dazzling rebrands, expanding our operational horizons, and fine-tuning our services, Leapfrog has evolved progressively throughout the years.</p>              <div className="read_more">
                <span style={{ paddingRight: '10px' }}>Read more</span>
                <FaArrowRight className='fa' />
              </div>
            </div>
          </div>
          <div className="card_blog">
            <img src={Blog3} alt="Blog3" className=' js-scroll fade-in' />
            <div className="post_card__infoys">
              <div className="post_date"><span>march 29, 2024</span></div>
              <h2 className="blog_title">Decoding Software Engineering fellowship: FAQs and tips</h2>
              <p className='blog_des'>With every announcement post of our fellowship, we have been stacked with messages and inquiries through different platforms. Is it virtual? Are there any qualifications required? I am still in college, can I apply? The list goes on.</p>
              <div className="read_more">
                <span style={{ paddingRight: '10px' }}>Read more</span>
                <FaArrowRight className='fa' />
              </div>
            </div>
          </div>
          <div className="card_blog">
            <img src={Blog4} alt="Blog3" className=' js-scroll fade-in' />
            <div className="post_card__infoys">
              <div className="post_date"><span>march 29, 2024</span></div>
              <h2 className="blog_title">Internship to Fellowship - Jumpstart your career with us!                </h2>
              <p className='blog_des'>From crafting dazzling rebrands, expanding our operational horizons, and fine-tuning our services, Leapfrog has evolved progressively throughout the years.</p>              <div className="read_more">
                <span style={{ paddingRight: '10px' }}>Read more</span>
                <FaArrowRight className='fa' />
              </div>
            </div>
          </div>
          <div className="card_blog">
            <img src={Blog5} alt="Blog3" className=' js-scroll fade-in' />
            <div className="post_card__infoys">
              <div className="post_date"><span>march 29, 2024</span></div>
              <h2 className="blog_title">Internship to Fellowship - Jumpstart your career with us!                </h2>
              <p className='blog_des'>From crafting dazzling rebrands, expanding our operational horizons, and fine-tuning our services, Leapfrog has evolved progressively throughout the years.</p>              <div className="read_more">
                <span style={{ paddingRight: '10px' }}>Read more</span>
                <FaArrowRight className='fa' />
              </div>
            </div>
          </div>
          <div className="card_blog">
            <img src={Blog6} alt="Blog3" className=' js-scroll fade-in' />
            <div className="post_card__infoys">
              <div className="post_date"><span>march 29, 2024</span></div>
              <h2 className="blog_title">Internship to Fellowship - Jumpstart your career with us!                </h2>
              <p className='blog_des'>From crafting dazzling rebrands, expanding our operational horizons, and fine-tuning our services, Leapfrog has evolved progressively throughout the years.</p>              <div className="read_more">
                <span style={{ paddingRight: '10px' }}>Read more</span>
                <FaArrowRight className='fa' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default Blog
