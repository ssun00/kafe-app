import React from 'react'
import './Navigation.css';
import { useNavigate } from 'react-router-dom'
import { GrLocation } from 'react-icons/gr'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IconContext } from "react-icons";


export default function Navigation() {
 
  return (
    <div className="nav">
      <div>
        <img src='/logo.png' alt='Kafei Logo' className='logo'/>
      </div>

      <div className='search-bar'>
        <IconContext.Provider
          value={{ size: '25px' }}>
          <GrLocation />
        </IconContext.Provider>
        <input 
          placeholder='search by location...'
          className='search'
        />
      </div>

      <div className='new-post'>
        <button id='add-button'>
          <IoMdAddCircleOutline id='add'/>
          new post
        </button>
      </div>
    </div>
    
  )
}