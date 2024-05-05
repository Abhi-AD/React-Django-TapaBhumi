import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './Pagination.css'
const Pagination = () => {
  return (
     <div className="pagination">
     <button className='icon_pagination'><FaArrowLeft className='arrow_pagination' />Prev</button>
     <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
       <li>4</li>
       <li>5</li>
     </ul>
     <button className='icon_pagination'>Next<FaArrowRight className='arrow_pagination' /></button>
   </div>
  )
}

export default Pagination
