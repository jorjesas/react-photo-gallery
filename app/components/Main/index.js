import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Switch, Route, Link, PropsRoute } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import AboutPage from 'containers/AboutPage';
import GalleryPage from 'containers/GalleryPage';
import UploadImagePage from 'containers/UploadImagePage';

class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // updateShared(album){
  // 	this.setState({album: album})
  // };

  render() {
    return (
      <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/About' component={AboutPage}/>
            <Route path='/Gallery/:id' component={GalleryPage}/>
            <Route path='/UploadImage' component={UploadImagePage}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
