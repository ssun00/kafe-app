import React from 'react';
import './SideBar.css';
import { FaPaw } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'


export default function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div className='sidebar'>
      <div className='profile-card'>
        <img src='/pfp.jpg' alt='Profile' className='pfp' />
        <h1>sunnisoph</h1>
        <div className='details'>
          <text className='numbers'>3</text>
          <text className='numbers'>5</text>
          <text className='labels'>posts</text>
          <text className='labels'>friends</text>
        </div>
      </div>

      <div className='navigation'>
        <div className='navlink'>
          <FaPaw id='paw' /><button id='explore'>explore</button>
        </div>
        
        <div className='navlink'>
          <AiOutlineUserAdd id='icon' /><button id='link'>find friends</button>
        </div>
        
        <div className='navlink'>
          <BsBookmark id='icon' /><button id='link'>saved</button>
        </div>

        <div 
          className='navlink'
          onClick={handleLogout}>
          <FiLogOut id='logout' /><button id='logout-button'>logout</button>
        </div>
      </div>

    </div>
  )
}
