import React, { useContext } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLink } from "react-icons/ci";


import qzoneImg1 from '../assets/swimming.png';
import qzoneImg2 from '../assets/class.png';
import qzoneImg3 from '../assets/playground.png'
import { AuthContext } from '../Authentication/AuthProvider';






const RightAside = () => {

    const {user,handleGoogleSignIn}=useContext(AuthContext)

    return (<>
    {user ? <h2 className='font-bold ml-2'>{ user.displayName }</h2>:<div className=' p-2'>
            <h2 className=' font-bold'>Login With</h2>
            <div className=' mt-2'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>
                    <FaGoogle />
                    Login with Google
                </button>
                <button className='btn btn-outline w-full mt-1'>
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    }
       
        <div className=' p-2'>
            <h2 className=' font-bold mb-2'> Find Us On</h2>
            <div className=' border-2 rounded-t rounded-b'>
                <a target=' ' href='https://www.facebook.com/kyow.chak.k/' className=' flex justify-start  items-center p-4'>
                    <FaFacebook className=' mr-3' />
                    <span className=' text-[#706f6f]'>Facebook </span>
                </a>
                <a target=' ' href='https://github.com/kyowChaing' className=' flex justify-start border-t-2  border-b-2 items-center p-4'>
                <FaGithub  className=' mr-3'/>
                <span className=' text-[#706f6f]'> GitHub </span>
                </a>
                <a target=' ' href="https://www.linkedin.com/in/kyow/" className=' flex justify-start  items-center p-4'>
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