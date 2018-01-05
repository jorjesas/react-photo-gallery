import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import { styles } from './styles.css';

export default function AboutPage() {
  return (
    <div className="container-middle">
      <H1>
        About
      </H1>
      <p>Photo gallery developed with React JS and Imgur API</p>
    </div>
  );
}