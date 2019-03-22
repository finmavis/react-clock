import React, { useState, Fragment, memo } from 'react';

import Header from './components/Header';
import Clock from './components/Clock';
import Footer from './components/Footer';

const App = props => {
  const [title] = useState('React Clock');

  return (
    <Fragment>
      <Header icon='fas fa-clock' title={title} />
      <Clock />
      <Footer />
    </Fragment>
  );
};

export default memo(App);
