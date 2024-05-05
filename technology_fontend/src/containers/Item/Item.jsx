import React, { useState } from 'react';
import './Item.css';
import { FaRebel, FaArrowRight, FaCloudversify, FaAirbnb } from "react-icons/fa";

import { Link } from 'react-router-dom'
import { product } from './imports';
const Item = () => {
    const [activeTab, setActiveTab] = useState('Products');

    const openItem = (itemname) => {
        setActiveTab(itemname);
    };
    return (
        <div className='service'>
            <div className="tab-header-service">
                <ul className="tab-header__list">
                    <li className='tab-item'>
                        <Link
                            className={activeTab === 'Products' ? 'tablinks active' : 'tablinks'}
                            onClick={() => openItem('Products')}>
                            <span className='tab-header__item'>
                                <FaRebel className='item_icon' />
                                <span className="tab-text">Products</span>
                            </span>
                        </Link>
                    </li>
                    <li className='tab-item'>
                        <Link
                            className={activeTab === 'Team' ? 'tablinks active' : 'tablinks'}
                            onClick={() => openItem('Team')}
                        >
                            <span className='tab-header__item'>
                                <FaCloudversify className='item_icon' />
                                <span className="tab-text">Team </span>
                            </span>
                        </Link>
                    </li>
                    <li className='tab-item'>
                        <Link
                            className={activeTab === 'Design' ? 'tablinks active' : 'tablinks'}
                            onClick={() => openItem('Design')}
                        >
                            <span className='tab-header__item'>
                                <FaAirbnb className='item_icon' />
                                <span className="tab-text">Design</span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div id="Products" className="tab-card" style={{ display: activeTab === 'Products' ? 'block' : 'none' }}>
                    <div className="tab-card-col-left">
                        <span className='tab-card-col-title'>Products</span>
                        <h2 className='tab-card-col-header'><span>Delive,</span> not just products</h2>
                        <p className='tab-card-col-des'>Build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.</p>
                        <div className="parnter_icon">
                            <span style={{ paddingRight: '10px' }}>Learn more</span>
                            <FaArrowRight className='fa' />
                        </div>
                    </div>
                    <div className="tab-card-col-right">
                        <img src={product} alt="product" />
                    </div>
                </div>
                <div id="Team" className="tab-card" style={{ display: activeTab === 'Team' ? 'block' : 'none' }}>
                    <div className="tab-card-col-left">
                        <span className='tab-card-col-title'>Team</span>
                        <h2 className='tab-card-col-header'><span>Delive,</span> not just products</h2>
                        <p className='tab-card-col-des'>Build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.</p>
                        <div className="parnter_icon">
                            <span style={{ paddingRight: '10px' }}>Learn more</span>
                            <FaArrowRight className='fa' />
                        </div>
                    </div>
                    <div className="tab-card-col-right">
                        <img src={product} alt="product" />
                    </div>
                </div>
                <div id="Design" className="tab-card" style={{ display: activeTab === 'Design' ? 'block' : 'none' }}>
                    <div className="tab-card-col-left">
                        <span className='tab-card-col-title'>Design</span>
                        <h2 className='tab-card-col-header'><span>Delive,</span> not just products</h2>
                        <p className='tab-card-col-des'>Build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.</p>
                        <div className="parnter_icon">
                            <span style={{ paddingRight: '10px' }}>Learn more</span>
                            <FaArrowRight className='fa' />
                        </div>
                    </div>
                    <div className="tab-card-col-right">
                        <img src={product} alt="product" />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Item;
