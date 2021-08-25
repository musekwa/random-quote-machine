import './App.css';
import React, { Component } from 'react';
import extra from './fakeData/ExternalModules'
import { QuoteBox } from './components/QuoteBox'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      qt_index: extra.randoms().qt,
      bg_index: extra.randoms().bg      
    }

    this.bg = extra.backgrounds;
    this.qt = extra.quotes;
  }

  getNextQuote = ()=>{
    setTimeout(2000);
    this.setState({
      qt_index: extra.randoms().qt,
      bg_index: extra.randoms().bg
    }); 
  }

  render(){

    return (
      <div style={{height: '100vh'}} id="outer-wrapper" className={`bg-${this.bg[this.state.bg_index]} text-center m-0`}>
        <QuoteBox
          bg={this.bg[this.state.bg_index]}
          callback={this.getNextQuote}
          quote={this.qt[this.state.qt_index].quote}
          quoter={this.qt[this.state.qt_index].quoter}
         />
      </div>
    );
  }
}

