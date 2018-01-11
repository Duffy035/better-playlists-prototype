import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let deafultStyle = {
  color: 'white'
}

let fakeServerData = {
  user: {
    name: 'Carl',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Who was in my room last night?', duration: 1345},
          {name: 'Jumping jack Flash', duration: 1234},
          {name: 'Song 2', duration: 7000}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Le song', duration: 1413},
          {name: 'Ballerino Fellerion', duration: 1213},
          {name: 'In the Ghetto', duration: 1221}
        ]
      },
      {
        name: 'Partylista',
        songs: [
          {name: 'Robot Rock', duration: 1244},
          {name: 'D.A.N.C.E', duration: 1315},
          {name: 'Girls', duration: 1355}
        ]
      },
      {
        name: '80-talet',
        songs: [
          {name: 'Living on a prayer', duration: 123515},
          {name: 'Mr Brownstone', duration: 13515},
          {name: '99 Luftballons', duration: 13515}
        ]
      }, 
    ]
  }
}

class PlaylistCounter extends Component{
  render(){
    return (
      <div style={{...deafultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    )
  }
}

class HoursCounter extends Component{
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...deafultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.floor(totalDuration/60)} Hours</h2>
      </div>
    )
  }
}

class Filter extends Component{
  render() {
    return (
      <div style={deafultStyle}>
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
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount(){
    setTimeout(() => {
        this.setState({serverData: fakeServerData}); 
    }, 1000);
    setTimeout(() => {
      this.setState({filterString: 'weekly'}); 
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...deafultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlists
          </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
            <Filter/>
<<<<<<< HEAD
<<<<<<< HEAD
           {/*{playlistElement}*/}
           )}
           {this.state.serverData.user.playlists.filter(playlist =>
          playlist.name.toLowerCase().includes(
            this.state.filterString.toLowerCase())
        ).map(playlist => 
        <Playlist playlist={playlist} /> 
        )}

          {/* )}
            {this.state.serverData.user.playlists.filter(playlist =>
              playlist.name.toLowerCase().includes(
                this.state.filterString.toLowerCase())
            ).map(playlist =>
            <Playlist playlist={playlist} />
            
            )}  */}
=======
=======
>>>>>>> parent of 58dbbfa... dynamic listing of fake server playlist data
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
<<<<<<< HEAD
>>>>>>> parent of 58dbbfa... dynamic listing of fake server playlist data
=======
>>>>>>> parent of 58dbbfa... dynamic listing of fake server playlist data
        </div> : <h1 style={deafultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
