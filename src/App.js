import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import ChordEditor from './components/ChordEditor.jsx';
import { base, app } from './base.js'
import SongList from './components/SongList.jsx';

class App extends Component {
  constructor() {
    super();
    this.addSong = this.addSong.bind(this);
    this.updateSong = this.updateSong.bind(this);
    this.state = {
       songs: {},
       authenticated: false,
       loading: true
    };
  }

  addSong(title){
    const songs = {...this.state.songs};
    const id = Date.now();
    songs[id] = {
      id: id,
      title: title,
      chordpro: ""
    };
    this.setState({songs});
  }

  updateSong(song){
    const songs = {...this.state.songs};
    songs[song.id] = song
    this.setState({songs});
  }

  // Firebase limits me on how many active connections I can have running
  // at once. I want a mount to run when the user enters, and unmount when the user 
  // has left.
  componentWillMount(){
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => { 
      if(user) {
    this.setState({
      authenticated: true,
      loading: false
    }) 
              } 
      else {
    this.setState({
      authenticated: false,
      loading: false
    })
    }
  })

    this.songsRef = base.syncState('songs', {
      context: this,
      state: 'songs'
    });
  }

  componentWillUnmount(){
    this.removeAuthListener();
    base.removeBinding(this.songsRef);
  }

  render() {
    if (this.state.loading === true){
    return (
      <div style={{ textAlign: "center", position: "absolute", top: "25%", left: 
      "50%" }}>
      <h3>Loading</h3>
      <Spinner />
      </div>
    );
  }
  return (
     <div style={{maxWidth: "1160px", margin: "0 auto"}}>
       <BrowserRouter>
       <div>
       <Header authenticated={this.state.authenticated} />
       <div className="main-content" style={{padding: "1em" }}>
       <div className="workspace">
         <Route exact path="/login" component={Login} />
         <Route exact path="/logout" component={Logout} />
         <Route exact path="/songs" render ={(props) => {
         return (
           <SongList songs={this.state.songs} />
         )
         }} />
         <Route path="/songs/:songId" render={(props) => {
           const song = this.state.songs[props.match.params.songId];
           return (
             song
             ? <ChordEditor song={song} updateSong={this.updateSong} />
             : <h1>Song not found</h1>
           )
         }} />
         </div>
         </div>
         </div>
       </BrowserRouter>
       <Footer />
       </div>
  );
  }
}

export default App;
