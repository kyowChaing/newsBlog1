import React, { useEffect, useState } from 'react'
import RightAside from '../components/RightAside'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import data from '../../public/news.json'
import { PiArrowFatLeftLight } from "react-icons/pi";

const NewsDetails = () => {

  const {id}=useParams();
  const [news,setNews]=useState({})

  console.log("news Id is ",id)
  console.log("news data from newsDetails", data)

  const newsData = data.find(news=>news._id===id)

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className='grid md:grid-cols-3'>

        <div className=' col-span-2'>
          <h1 className=' font-bold text-[#636363] text-lg'>Dragon News </h1>
          <div className='border'>
            {/* image, tiitle, description */}
            <div className='pl-5 py-5'>
              
              <img src={newsData.image_url} alt="" />
              <h2 className=' font-bold text-xl py-4'> {newsData.title}</h2>
              <p>{newsData.details}</p>
              
              <button className='text-white bg-[#D72050] p-2 mt-5 flex items-center'><span className=' inline-block px-4 '><PiArrowFatLeftLight /></span> 
              <Link to="/">All news in this category</Link></button>

            </div> 
          </div>
        </div>
        <div className=' col-span-1'>
          <RightAside></RightAside>
        </div>
      </div>
    </>

  )
}

export default NewsDetails