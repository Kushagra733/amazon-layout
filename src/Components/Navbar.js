import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='header'>
      <ul>
          <li className='x' ><img className='logo'  src={require('./logo.png')} /></li>
          <li className='address'>
              <div className='x1'>Hello</div>
              <div className='x2'>Select your address</div>
          </li>
          <li className='searchbar'>

              
                  <select className='dropdown' name="type" id="type" >
                      <option value="all" selected='selected'>All</option>
                      <option value="">sdfsfd</option>
                  </select>
              
              <textarea name="text" id="text" cols="80" rows="1"></textarea>
              <button className='btn'>X</button>
          </li>
          <li>
              <div className="x3">Returns</div>
              <div className="x2">& Orders</div>
          </li>
          <li className='cart'>
              <div className="x2">Cart</div>
          </li>
      </ul>
    </div>
  )
}
