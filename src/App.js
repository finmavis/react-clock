import React, { useState, Fragment } from 'react';

import useDate from './hooks/date';
import useToggle from './hooks/toggle';

import Header from './components/Header';
import Clock from './components/Clock';
import Footer from './components/Footer';

import { options } from './clockOptions';

const App = props => {
  const [title] = useState('React Clock');
  const { date } = useDate();
  const { show, toggle } = useToggle(false);

  return (
    <Fragment>
      <Header icon='fas fa-clock' title={title} />
      <Clock changed={toggle} date={date} showDate={show} options={options} />
      <Footer />
    </Fragment>
  );
};

export default App;
