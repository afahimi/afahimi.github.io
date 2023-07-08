import React from 'react';
import classes from './TextContainer.module.css';

const TextContainer = ({children, classes: additionalClasses}) => {
    return (
        <div className={`${classes.container} ${additionalClasses}`}>
            {children}
        </div>
    );
}

export default TextContainer;