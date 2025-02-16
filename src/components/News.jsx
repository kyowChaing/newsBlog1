import React from 'react'
import { IoMdShare } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';
import starImage from '../assets/star.png'
import { FaRegEye } from "react-icons/fa";

const News = ({news}) => {

    const { rating, total_view, author, title,image_url } = news;
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
          <h2 className=' font-bold'>{title}</h2>
          <img src={image_url} alt="" />
          <p className='p-1 mt-3'>
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, 
          Russia, Security, UK, Ukraine, 
          United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion 
          in new U.S. military a... <button className='text-[#FF8F4C]'> Read More </button> 
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