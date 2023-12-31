'use client'

import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function LikeButton({ onClick }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleLikeClick = () => {
    setHovered(true);
    setClicked(true);
    onClick();
    setTimeout(() => {
      setClicked(false);
    }, 100);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setClicked(false);
  };

  const size = clicked ? '18px' : '22px';
  const style = {
    width: size,
    height: size
  };

  return (
    <div
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        padding: '0 5px',
        //fontSize: clicked ? '18px' : '30px',
        //padding: clicked ? '5px' : '0px',
        transition: 'font-size 0.1s, color 0.3s',
        color: '#6da7e7',
      }}
      onClick={handleLikeClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered ? <ThumbUpIcon style={style} /> : <ThumbUpOffAltIcon style={style} />}
    </div>
  );
}

export default LikeButton;
