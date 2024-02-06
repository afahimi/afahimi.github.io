import React from 'react';
import classes from './AboutPanel.module.css';

const AboutPanel = (props) => {
  const panelStyle = {
    backgroundColor: props.backgroundColor,
  };

  return (
    <div className={`${classes.panel} flex xl:justify-between flex-col xl:flex-row justify-center items-center w-full`} style={panelStyle}>
      {props.children}
    </div>
  );
}

export default AboutPanel;
