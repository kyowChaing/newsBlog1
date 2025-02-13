import React from 'react'
import logo from '../assets/logo.png'
import moment from 'moment'
const Header = () => {
  return (
        <div className=' text-center mt-3'> 
                <img className=' mx-auto' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, LL')}</p>
            
        </div>
  )
}

export default Header