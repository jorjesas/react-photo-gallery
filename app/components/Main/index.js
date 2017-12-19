import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import AboutPage from 'containers/AboutPage';
import GalleryPage from 'containers/GalleryPage';

class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/About' component={AboutPage}/>
            <Route path='/Gallery' component={GalleryPage}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
