import React, { Component } from 'react';
import { styles } from './styles.css';

function ImageContainer(props) {
    const image = props.image;
    const index = props.index;
  
    return (
        <li key={index}>
            <div onClick={() => props.onClickHandler(index)} className="element clearfix col1-3">
                <figure className="images test" style={{ backgroundImage: "url(" + image.link + ")" }}></figure>
                <div className="image-description">
                    <h4>{image.description}</h4>
                    <div className="bottom">
                        <div className="wrapper">
                            <p className="small">modal view</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
  }
  
  export default ImageContainer;