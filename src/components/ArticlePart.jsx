import React from 'react';
import { IoMdShare } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';
import starImage from '../assets/star.png'
import { FaRegEye } from "react-icons/fa";



const ArticlePart = () => {
  return (
    <div>
        <h2 className=' font-bold p-1 text-[#403F3F]'>Dragon News Home </h2>

        <div className='border my-2'>
          <div className=' flex justify-between bg-[#F3F3F3] p-2'>
            <div>
              <img className=' py-2' src="" alt="" />
              <div>
                <h3 className='font-bold'> Author Name </h3>
                <p className='text-sm'> Publish date </p>
              </div>
            </div>
            <div className=' flex items-center gap-4'>
            <Link to="" className=''> <FaRegBookmark /> </Link>
             <Link to=""> <IoMdShare /> </Link>
          
            </div>
          </div>
          <div className=' m-4'>
          <h2 className=' font-bold'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
          <img src="" alt="" />
          <p className='p-1'>
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
              <p className=' pl-1 mt-1'>4.9</p>
            </div>
            <div>
              <div className='flex items-center gap-2'>
              <FaRegEye />
                <p> 444 </p>
              </div>
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default ArticlePart