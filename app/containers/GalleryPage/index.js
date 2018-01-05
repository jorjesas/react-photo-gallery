/*
 * GalleryPage
 *
 * This presents gallery images
 */

import React from 'react';
import PropTypes from 'prop-types';

import { openModal, closeModal, plusSlides, currentSlide, showSlides, handleImageClick} from './modal';

import ImageContainer from 'components/ImageContainer';
import {styles} from './styles.css';

export class GalleryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor() {
    super();
    this.state = {
      pictures: [],
      modalSlideContainer: [],
      modalImagesContainer: []
    }
  }

  componentDidMount() {
    console.log(this.props);
    const linkUrl = 'https://api.imgur.com/3/album/' + this.props.match.params.id +'/images';

    let getAlbumImagesAPI = {
      link: linkUrl,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID 9a8bbc05084cd11'
      }
    }

    fetch(getAlbumImagesAPI.link, {
      method: getAlbumImagesAPI.method,
      headers: getAlbumImagesAPI.headers
    })
    .then(results => {
      return results.json();
    })
    .then(data => {
      console.log(data);
      let imagesList = data.data.map((image, index) => {
        return (
          <ImageContainer image={image} index={index} onClickHandler={openModal}></ImageContainer>
        );
    });

    let modalSlides = data.data.map((image, index) => {    
      return (
        <div key={index} className="mySlides">
          <div className="numbertext">{index} / {data.length}</div>
          <div style={{ backgroundColor: "black" }}>
            <img src={image.link} style={{ height: "450px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
          </div>
        </div>
      );
    });

    let modalImages = data.data.map((image, index) => {
      return (
        <div key={index} className="modal-image modal-opacity" style={{ backgroundImage: "url(" + image.link + ")" }} onClick={() => currentSlide(index + 1)} data-imagedescription={image.description}>
        </div>
      );
    });

      this.setState({pictures: imagesList});
      this.setState({modalSlideContainer: modalSlides});
      this.setState({modalImagesContainer: modalImages});
      console.log("state", this.state.pictures);
    })
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
    <div>
    <section className="grid-wrap">
      <ul className="grid swipe-right" id="grid">
        <li className="title-box gallery-image-description-box">
          <h2>Gallery images</h2>
        </li>
        {this.state.pictures}
      </ul>
    </section>

    <div id="myModal" className="modal">
      <span className="close cursor" onClick={closeModal}>&times;</span>
      <div className="modal-content">

        {this.state.modalSlideContainer}

        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

        <div className="caption-container">
          <p id="caption"></p>
        </div>

        {this.state.modalImagesContainer}
      </div>
    </div>

    </div>
    );
  }
}

GalleryPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};


export default (GalleryPage);