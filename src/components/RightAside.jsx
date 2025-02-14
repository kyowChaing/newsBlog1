import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

import qzoneImg1 from '../assets/swimming.png';
import qzoneImg2 from '../assets/class.png';
import qzoneImg3 from '../assets/playground.png'






const RightAside = () => {
    return (<>
        <div className=' p-2'>
            <h2 className=' font-bold'>Login With</h2>
            <div className=' mt-2'>
                <button className='btn btn-outline w-full'>
                    <FaGoogle />
                    Login with Google
                </button>
                <button className='btn btn-outline w-full mt-1'>
                    <FaGithub />
                    Login with Google
                </button>
            </div>
        </div>
        <div className=' p-2'>
            <h2 className=' font-bold mb-2'> Find Us On</h2>
            <div className=' border-2 rounded-t rounded-b'>
                <a href='' className=' flex justify-start  items-center p-4'>
                    <FaFacebook className=' mr-3' />
                    <span className=' text-[#706f6f]'>Facebook </span>
                </a>
                <a href='' className=' flex justify-start border-t-2  border-b-2 items-center p-4'>
                    <FaTwitter className=' mr-3' />
                    <span className=' text-[#706f6f]'> Twitter </span>
                </a>
                <a href=" " className=' flex justify-start  items-center p-4'>
                    <CiLink className='mr-3' />
                    <span className=' text-[#706f6f]'>LinkInd </span>
                </a>
            </div>
        </div>
        <div className='mt-12 p-2 bg-[#f3f3f3]'>
            <h2 className=' font-bold mb-6'> Q-Zone</h2>
            <div >
                <img src={qzoneImg1} className='w-full' alt="" />
                <img src={qzoneImg2} className='w-full' alt="" />
                <img src={qzoneImg3} className='w-full' alt="" />
            </div>

        </div>


    </>

    )
}

export default RightAside