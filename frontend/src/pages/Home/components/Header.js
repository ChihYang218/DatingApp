import React from 'react';
import './Header.css'
import IconButton from '@mui/material/IconButton';
import FaceIcon from '@mui/icons-material/Face';
import MessageIcon from '@mui/icons-material/Message';

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <FaceIcon fontSize='large' className='header__icon' />
      </IconButton>
      <img src='buddy.png' alt='header' className='header__logo' />
      <IconButton>
        <MessageIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  );
}
export default Header