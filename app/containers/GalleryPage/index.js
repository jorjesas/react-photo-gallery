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

export class GalleryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor() {
    super();
    this.state = {
      pictures: []
    }
  }

  componentDidMount() {
    let getAlbumImagesAPI = {
      link: 'https://api.imgur.com/3/album/d93Wj/images',
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
          <li><a href="#"><img src={image.link} alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        );
      })
      this.setState({pictures: imagesList});
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
      <section className="grid-wrap">
      <ul className="grid swipe-right" id="grid">
        <li className="title-box">
          <h2>Illustrations by <a href="http://ryotakemasa.com/">Ryo Takemasa</a></h2>
        </li>
        {this.state.pictures}
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
        <li><a href="#"><img src="https://i.imgur.com/LAbqhv1.jpg" alt="dummy" style={{width: '300px', height: '230px'}} /><h3>A fantastic title</h3></a></li>
      </ul>
    </section>
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
