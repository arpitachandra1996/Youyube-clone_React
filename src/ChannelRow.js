import React from 'react';
import Avatar from '@mui/material/Avatar';
import './ChannelRow.css';

import { Verified } from '@mui/icons-material';

function ChannelRow  ({
     image,
     channel,
     subs,
     noOfVideos,
     description,
     verified
})  {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow_logo'alt= {channel} src={image} />
      <div className='channelRow_text'>
        <h4>{channel} {verified && < Verified/> }</h4>
        <p>{subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
