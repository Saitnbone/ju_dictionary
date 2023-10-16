import React from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

export const MainHeader = () => {
  return (
    <header>
      <div className='header_block'>
        <span className='span_burger_icon'><HiOutlineMenuAlt2 className='icon'/></span>
      </div>
    </header>
  )
};

export default MainHeader;