import React, { Component } from 'react';
import { styles } from './styles.css';

function Select(props) {
    const albums = props.albums;
    let content = (<option></option>);

    console.log(albums);
  
    // If we have items, render them
    if (albums) {
      content = albums.map((album, index) => (
        <option id={`option-album-${album.id}`} key={`item-${album.id}`}>{album.title}</option>
      ));
    } else {
      // Otherwise render a single component
      content = (<option></option>);
    }
  
    return (
        <div className="select">
            <span className="arr"></span>
            <select>
            {content}
            </select>
        </div>
    );
  }
  
  export default Select;