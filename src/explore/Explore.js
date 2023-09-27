import React from 'react'
import './Explore.css';
import { useNavigate } from 'react-router-dom'
import Navigation from '../navigation/Navigation';
import SideBar from '../side-bar/SideBar';
import Post from '../post/Post';

export default function Explore() {
   
  
  return (
    <div className='container'>
      <Navigation />
      <div className='wrapper'>
        <SideBar />
        <div className='explore-page'>
          <h1 id='title'>explore</h1>
          <Post />
        </div>
      </div>

    </div>
  )
}
