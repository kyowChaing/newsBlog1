import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <div>
        <Header></Header>
        <div> 
          <h2> Top Contributor </h2>
          <hr />
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <p>Who we are </p>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className=''>
          <div className='flex bg-[#EFF0F3]'>
            <img src="" alt="" />
            <div>
              <h2 className='font-black'>name</h2>
              <p className='text-[#7D8894]'> position</p>
              <div className='flex items-center'>
                <span> publish icon</span>
                <p className='text-[#7D8894]'>03 publishd post</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About