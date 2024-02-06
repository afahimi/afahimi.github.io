import React from 'react';
import classes from './TextContainer.module.css';

const TextContainer = ({children, classes: additionalClasses, className}) => {
    return (
        <div className={`${classes.container} ${additionalClasses} ${className}`}>
            {children}
        </div>
    );
}

export default TextContainer;