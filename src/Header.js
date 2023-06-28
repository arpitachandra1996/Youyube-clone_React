import React from 'react';
import {useState} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';

function Header  ()  {
  const [inputSearch, setInputSearch ] = useState('');
  return (
    <div className='header'>
      
      <div className='header_left'>
      <MenuSharpIcon />
      <Link to='/'>
      <img className='header_logo'
      src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
      alt=''
      />
      </Link>
      </div>
      <div className='header_input'>
      <input onChange={e => setInputSearch(e.target.value)} value= {inputSearch} placeholder='search' type='text'/>  
      <Link to={`/search/${inputSearch}`}>
      <SearchSharpIcon className= 'header_inputButton' /> 
      </Link>
      
      </div>
      <div className='header_icons'>
      <VideoCallSharpIcon className='header_icon'/>
      <AppsSharpIcon className='header_icon'/>
      <NotificationsActiveSharpIcon className='header_icon'/>
      </div>
      
    </div>
  );
}

export default Header
