import React, { Component } from 'react';

import Aux from './components/AuxWrap';
import Header from './components/Header';
import Clock from './components/Clock';
import Footer from './components/Footer';

class App extends Component {
  state = {
    title: 'React Clock',
    date: new Date(),
    showDate: false
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getDate = () => {
    this.setState({
      date: new Date()
    });
  }

  showDateHandler = () => {
    this.setState({
      showDate: !this.state.showDate
    })
  }

  render() {
    const options = {
      weekday: 'short',
      month: 'long', 
      year: 'numeric',  
      day: 'numeric'
    };

    return (
      <Aux>
        <Header 
          icon="fas fa-clock"
          title={this.state.title} />
        <Clock 
          changed={this.showDateHandler}
          date={this.state.date} 
          showDate={this.state.showDate} 
          options={options} />
        <Footer />
      </Aux>
    );
  }
}

export default App;
