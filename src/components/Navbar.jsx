import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/user.png'
import { AuthContext } from '../Authentication/AuthProvider'

const Navbar = () => {
  const {user, userLogout}=useContext(AuthContext);

  const handleLogout =()=>{userLogout()}

  console.log(
    'user from nav is :',user
  )

  console.log('user email', user?.email)

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={'/'}> Home </Link></li>
            <li><Link > About</Link></li>

            <li> <Link to=""> Career </Link></li>
            <li> <Link to=""> {user?.displayName} </Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to={'/'}> Home </Link></li>
          <li><Link to={'/about'}> About</Link></li>

          <li> <Link to={'/career'}> Career </Link></li>

        </ul>
      </div>
      <div className="navbar-end">
      <Link className='px-2' to=""> {user?.displayName} </Link>
        <div className="dropdown dropdown-end">
        
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={image} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>

        { user?
          <button className=' w-24 text-gray-50 p-1 text-center  bg-[#403f3f]' onClick={handleLogout}> Logout </button>
          :
          <Link to={'/login'} className=' w-24 text-gray-50 p-1 text-center  bg-[#403f3f]'> Login </Link>

        }

      </div>
    </div>
  )
}

export default Navbar
