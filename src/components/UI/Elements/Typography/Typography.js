import React from 'react';
import classes from './Typography.module.css';

export const H1 = (props) => {
    return (
        <h1 className={classes.h1}>
            {props.children}
        </h1>
    );
}

export const H3 = (props) => {
    return (
        <h3 className={classes.h3}>
            {props.children}
        </h3>
    );
}

export const P = (props) => {
    return (
        <p className={classes.p}>
            {props.children}
        </p>
    );
}