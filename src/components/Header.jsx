import React from 'react'
import logo from '../assets/logo.png'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <div className=' text-center mt-3'> 
                <Link to={'/'}>
                <img  className=' mx-auto' src={logo} alt="" />
                </Link>
                
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, LL')}</p>
                
                
            
        </div>
  )
}

export default Header