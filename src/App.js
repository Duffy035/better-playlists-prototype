import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let deafultStyle = {
  color: 'blue'
}

class Aggregate extends Component{
  render(){
    return (
      <div style={{...deafultStyle, width: '40%', display: 'inline-block'}}>
        <h2>Number Text</h2>
      </div>
    )
  }
}

class Filter extends Component{
  render() {
    return (
      <div style={{...deafultStyle}}>
        <img/>
        <input type="text"/>
      </div>
    )
  } 
}

class Playlist extends Component{
  render() {
    return (
      <div style={{...deafultStyle, display: 'inline-block', width: '25%'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li></ul>
        <ul><li>Song 2</li></ul>
        <ul><li>Song 3</li></ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{...deafultStyle, 'font-size': '54px'}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
