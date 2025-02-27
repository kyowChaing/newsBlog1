import React from 'react'
import { IoMdShare } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';
import starImage from '../assets/star.png'
import { FaRegEye } from "react-icons/fa";

const News = ({news}) => {

    const { _id, rating, total_view, author, title,image_url, details } = news;
  return (
    <div>

<div className='border my-2'>
          <div className=' flex justify-between bg-[#F3F3F3] p-2'>
            <div className='flex gap-2'>
              <img className=' py-2 w-10 h-10 rounded-full' src={author.img} alt="" />
              <div>
                <h3 className='font-bold'> {author.name} </h3>
                <p className='text-sm'>  { author.published_date}</p>
              </div>
            </div>
            <div className=' flex items-center gap-4'>
            <Link to="" className=''> <FaRegBookmark /> </Link>
             <Link to=""> <IoMdShare /> </Link>
          
            </div>
          </div>
          <div className=' m-4'>
          <h2 className=' font-bold p-3'>{title}</h2>
          <img src={image_url} alt="" />
          <p className='p-1 mt-3'>{details.slice(0,150)}

            <Link to={`/news/${_id}`}> <button className='text-[#FF8F4C] ml-6'> Read More </button></Link>
            
             
          </p>
          </div>
          <div className='flex justify-between p-4 border'>
            <div className=' flex items-center gap-2'>
              <img src={starImage} alt="" />
              <img src={starImage} alt="" />
              <img src={starImage} alt="" />
              <img src={starImage} alt="" />
              <img src={starImage} alt="" />
              <p className=' pl-1 mt-1'>{rating.number}</p>
            </div>
            <div>
              <div className='flex items-center gap-2'>
              <FaRegEye />
                <p>{total_view} </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default News