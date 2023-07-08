import React from 'react';
import classes from './Keyword.module.css';
import { P } from '../../../../UI/Elements/Typography/Typography';

const Keyword = (props) => {
    return (
        <div className={classes.keyword}>
            <P>
            {props.keyword}
            </P>
        </div>
    )
}

export default Keyword;
