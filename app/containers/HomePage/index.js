/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
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
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import AlbumContainer from 'components/AlbumContainer';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor() {
    super();
    this.state = {
      albums: []
    }
  }

  calculateAlbumPosition(index) {
    let leftPos = 0 + 'px';
    let topPos = 0 + 'px';

    if (index >= 4) {
      let resetIndex = index - 4;
      topPos = (Math.floor(resetIndex / 4) + 2)*320  + 'px';
      leftPos = (resetIndex % 4)*320 + 'px';
    }
    else {
      switch(index) {
        case 0: 
          leftPos = 0 + 'px';
          topPos = 0 + 'px';
          break;
        case 1: 
          leftPos = 960 + 'px';
          topPos = 0 + 'px';
          break;
        case 2: 
          leftPos = 0 + 'px';
          topPos = 320 + 'px';
          break;
        case 3: 
          leftPos = 960 + 'px';
          topPos = 320 + 'px';
          break;
        default: 
          leftPos = 0 + 'px';
          topPos = 0 + 'px';
      }
    }

    return {leftPos: leftPos, topPos: topPos};
  }

  componentDidMount() {
    let getAlbumsAPI = {
      link: 'https://api.imgur.com/3/account/jorje12/albums/',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID 9a8bbc05084cd11'
      }
    }

    fetch(getAlbumsAPI.link, {
      method: getAlbumsAPI.method,
      headers: getAlbumsAPI.headers
    })
    .then(results => {
      return results.json();
    })
    .then(data => {
      console.log(data);
      let albumsContainer = data.data.map((album, index) => {
        let pos = this.calculateAlbumPosition(index);
        let albumContainerStyle = {position: 'absolute', left: pos.leftPos, top: pos.topPos};
        
        return (
          <AlbumContainer album={album} index={index} containerStyle={albumContainerStyle}></AlbumContainer>
        );
      })
      this.setState({albums: albumsContainer});
      console.log("state", this.state.albums);
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
        <div className="centered logo-wrapper">
          <h1 id="logo"><a href="index.html"><img src={require('../../images/icon-96x96.png')} /></a></h1>
          <div className="tagline">Albums</div>
        </div>
        <div className="content-wrapper">
          <div id="content">
            <div className="container">
              <div id="container" className="clearfix" style={{ position: 'relative', height: '1400px' }}>
                <div className="element  clearfix col2-3 home about grey" style={{ position: 'absolute', left: '320px', top: '0px' }}>
                  <div className="tile-heading"><span>Image Gallery</span></div>
                  <div className="parent">
                    <div className="child">
                      <h2>Hi! <br />
                        A <strong>photo-gallery</strong> developed with ReactJs. <br />
                      </h2>
                      <a href="about" className="bottom-link splink">
                        <p className="small">read about</p>
                      </a>
                    </div>
                  </div>
                </div>
                {this.state.albums}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
