import React, { Component } from 'react';
import { styles } from './styles.css';

function AlbumContainer(props) {
    const album = props.album;
    const index = props.index;

    let coverPic = "https://i.imgur.com/" + album.cover + ".jpg";
    let backgroundStyle = {
      background : coverPic
    }
  
    return (
        <div key={index} className="element  clearfix col1-3 home portfolio photography" style={props.containerStyle}> <a href={"/Gallery/" + album.id} title="">
          <figure className="images test" style={{backgroundImage: "url(" + coverPic + ")"}}>

          </figure>
          <div className="description">
            <h4>{album.title}</h4>
            <div className="bottom">
              <div className="wrapper">
                <p className="small">view gallery</p>
              </div>
            </div>
          </div>
          </a> 
        </div>
    );
  }
  
  export default AlbumContainer;