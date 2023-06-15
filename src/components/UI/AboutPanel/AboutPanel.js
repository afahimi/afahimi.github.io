import React from 'react';
import classes from './AboutPanel.module.css';

const AboutPanel = (props) => {
  const panelStyle = {
    backgroundColor: props.backgroundColor,
  };

  return (
    <div className={classes.panel} style={panelStyle}>
      {props.children}
    </div>
  );
}

export default AboutPanel;
