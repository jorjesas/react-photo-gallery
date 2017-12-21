import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

const style = {
  // position: 'absolute',
  right: '0',
  bottom: '0',
  left: '0',
  padding: '1rem',
  backgroundColor: '#efefef',
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white'
};

function Footer() {
  return (
    <footer style={style}>
      <p>©George Sas, 2017.</p>
    </footer>
  );
}

export default Footer;
