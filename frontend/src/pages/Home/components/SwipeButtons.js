import React from "react";
import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
  return (
    <div className="SwipeButtons">
      <IconButton className="Replay">
        <ReplayIcon fontSize="large" />
      </IconButton>

      <IconButton className="Close">
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="Favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton className="Star">
        <StarIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons