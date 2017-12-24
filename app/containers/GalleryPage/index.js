/*
 * GalleryPage
 *
 * This presents gallery images
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import { openModal, closeModal, plusSlides, currentSlide, showSlides, handleImageClick} from './modal';

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
          <li key={index}>
              <div onClick={openModal} style={{width: '300px', height: '300px', backgroundImage: "url(" + image.link + ")", backgroundSize: 'cover'}}>
                <h3>{image.description}</h3>
              </div>
          </li>
        );
      });

      let modalSlides = data.data.map((image, index) => {    
               return (
                <div key={index} className="mySlides">
                  <div className="numbertext">{index} / {data.length}</div>
                  <div style={{backgroundColor: "black"}}>
                    <img src={image.link} style={{height:"450px", display:"block", marginLeft: "auto", marginRight: "auto"}} />
                  </div>
                </div>
               );
             });

      let modalImages = data.data.map((image, index) => {    
      return (
        <div key={index} className="column">
          <img className="demo cursor" src={image.link} style={{width:"auto", height: "200px"}} onClick={() => currentSlide(index+1)} alt="Nature and sunrise" />
        </div>
      );
    });

      // console.log("parent = " + this.props.x);

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
        <li className="title-box">
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
