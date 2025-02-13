import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

import Marquee from 'react-fast-marquee';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      
      <Header></Header>
      
      <div className=' flex bg-slate-300 h-20  mt-11 items-center'>
        <button className="btn btn-active btn-secondary  ml-6 text-center mt-0"> Latest </button>
        <Marquee>
          <div>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</div>
        </Marquee>
      </div>

      <Navbar></Navbar>
      

    </div>
  )
}

export default Home;