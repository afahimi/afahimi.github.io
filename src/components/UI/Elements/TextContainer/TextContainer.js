import React from 'react';
import classes from './TextContainer.module.css';

const TextContainer = ({children}) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
}

export default TextContainer;