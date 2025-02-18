import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

import Marquee from 'react-fast-marquee';
import Navbar from '../components/Navbar';
import LeftAside from '../components/LeftAside';
import ArticlePart from '../components/ArticlePart';
import RightAside from '../components/RightAside';
import bgImg from '../assets/bg.png'


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

      <section className='grid grid-cols-1 md:grid-cols-4 '>

        <aside className=' '>
          <LeftAside></LeftAside>
        </aside>
        <article className=' md:col-span-2'>
          <ArticlePart></ArticlePart>
        </article>
        <aside className=' '>
          <RightAside></RightAside>
          <div>
            <img src={bgImg} className='w-full' alt="" />
        </div>
        </aside>
      </section>


    </div>
  )
}

export default Home;