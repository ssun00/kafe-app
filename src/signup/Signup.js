import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = () => {
    // error handling
    if (username === "" || password === "") {
      alert("Please enter a valid username or password");
    } else {
      navigate('/explore');
    }

  }

  const handleUser = () => {
    navigate('/')
  }

  const handlePassword = () => {
    
  }

  return (
    <div className='Signup'>
      <div>
        <img src='/logo.png' alt='Kafei Logo'/>
        <div>
        <h3>
          a social media platform <br /> to find + share cafes
        </h3>
        </div>
      </div>

      <h1>sign up</h1>

      <div>
        <form>
          <div className='user-input'>
            <label for='username'>
              username
            </label>
            <br />
            <input 
              type='text' 
              name='username' 
              id='username' 
              className='type-1'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='user-input'>
            <label for='password'>
              password
            </label>
            <br />
            <input 
              type='text' 
              name='password' 
              id='password' 
              className='type-1'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button class="login" onClick={handleUser}>already a user</button>
            <button class="forgot-pass" onClick={handlePassword}>forgot password</button>
          </div>
          <br />
          <div>
            <input 
              type='submit' 
              value='sign up' 
              className='signup-button'
              onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
