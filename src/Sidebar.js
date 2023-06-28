import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import './SidebarRow.css';
import { ExpandMoreOutlined, HistorySharp, OndemandVideo, SubscriptionsSharp, VideoLibrary, WatchLaterSharp, Whatshot } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';

function Sidebar  ()  {
  return (
    <div className='sidebar'>

      <SidebarRow selected Icon={HomeIcon} title='Home'/>
      <SidebarRow Icon={Whatshot} title='Trending'/>
      <SidebarRow Icon={SubscriptionsSharp} title='Subscription'/>
      <hr />
      <SidebarRow Icon={VideoLibrary} title='Library'/>
      <SidebarRow Icon={HistorySharp} title='History'/>
      <SidebarRow Icon={OndemandVideo} title='Your videos'/>
      <SidebarRow Icon={WatchLaterSharp} title='Watch later'/>
      <SidebarRow Icon={ThumbUpAltSharpIcon} title='Like'/>
      <SidebarRow Icon={ExpandMoreOutlined} title='Subscription'/>
    </div>
  )
}

export default Sidebar
