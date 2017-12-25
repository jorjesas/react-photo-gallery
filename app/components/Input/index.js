import React, { Component } from 'react';
import { styles } from './styles.css';

function Input(props) {
    const inheritedStyle = props.style;

  
    return (
        <div style={props.style}>
            <input type="text" name="name" className="question" id="nme" required autoComplete="off"/>
            <label htmlFor="nme"><span>{props.title}</span></label>
        </div>
    );
  }
  
  export default Input;