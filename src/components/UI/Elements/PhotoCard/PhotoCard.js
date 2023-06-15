import React from 'react';
import classes from './PhotoCard.module.css';

const PhotoCard = (props) => {
    <img src={props.src} alt="Profile" className={classes.profilePic} />
}

export default PhotoCard;