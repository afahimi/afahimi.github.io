import React from 'react';
import classes from './AboutPanel.module.css';

const AboutPanel = (props) => {
  return (
    <div className={classes.panel}>
      {props.children}
    </div>
  );
}

export default AboutPanel;
