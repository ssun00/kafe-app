import React from 'react'
import './Post.css'
import { IoPawOutline } from 'react-icons/io5'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { useState } from 'react'

export default function Post() {
  const [isHearted, setHearted] = useState(false);
  const [isBookmarked, setBookmarked] = useState(false);
  
  const handleHeart = () => {
    setHearted(!isHearted);
  }

  const handleBookmark = () => {
    setBookmarked(!isBookmarked);
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <img src='./pfp.jpg' alt='User Profile' className='user-pfp'/>
        <div className='card-header-details'>
          <text id='username'>sunnisoph</text>
          <br />
          <text id='location'>cary, nc</text>
        </div>
      </div>
      <div className='card-body'>
        <img src='./sweet-room.png' alt='Sweet Room Bingsoo' className='post-photo'/>
      </div>
      <div className='card-interactions'>
        <div>
          <IoPawOutline id='cafe-icon'/><text id='cafe-name'>sweet room</text>
        </div>
        <div className='post-interactions'>
          <div>
            {isHearted ? (
              <AiOutlineHeart id='heart-icon' onClick={handleHeart} />
            ) : (
              <AiFillHeart id='filled-heart' onClick={handleHeart} />
            )}
          </div>
          <div>
          {isBookmarked ? (
              <BsBookmark id='bookmark-icon' onClick={handleBookmark} />
            ) : (
              <BsFillBookmarkFill id='filled-bookmark' onClick={handleBookmark} />
            )}
          </div>
          <div>
            <FiEdit id='edit-icon'/>
          </div>
        </div>
      </div>
      <div className='post-details'>
          <p id='description'>melon bingsoo at my favorite cafe!</p>
      </div>
    </div>
  )
}
