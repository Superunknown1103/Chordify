import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import ChordEditor from './components/ChordEditor.jsx';
import { base, app } from './base.js';
import SongList from './components/SongList.jsx';

function AuthenticatedRoute({component: Component, authenticated,  ...rest}) {
  return (
    <Route 
    {...rest}
    render={(props) => authenticated === true
    ? <Component { ...props} {...rest} />
    : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
    } />
  )
}

class App extends Component {
  constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.addSong = this.addSong.bind(this);
    this.updateSong = this.updateSong.bind(this);
    this.state = {
      currentUser: null,
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
      chordpro: "",
      owner: this.state.currentUser.uid
    };
    this.setState({songs});
  }

  updateSong(song){
    const songs = {...this.state.songs};
    songs[song.id] = song
    this.setState({songs});
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true,
        loading: false,
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false,
        loading: false

    })
  }
}
    // Firebase limits me on how many active connections I can have running
  // at once. I want a mount to run when the user enters, and unmount when the user 
  // has left.
  componentWillMount(){
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => { 
      if(user) {
    this.setState({
      authenticated: true,
      loading: false,
      currentUser: user,
    }) 
    // sync the state from inside of Firebase that is sitting at the
    // user's ID to songs on the App.
    this.songsRef = base.syncState(`songs/${user.uid}`, {
      context: this,
      state: 'songs'
    });
  } else {
    this.setState({
      authenticated: false,
      loading: false,
      currentUser: false,
    })
    
    base.removeBinding(this.songsRef);
    }
  })
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
       <Header addSong = {this.addSong} authenticated={this.state.authenticated} />
       <div className="main-content" style={{padding: "1em" }}>
       <div className="workspace">
         <Route exact path="/login" render={(props) => {
          return <Login setCurrentUser={this.setCurrentUser} {...props}
          /> }} />
         <Route exact path="/logout" component={Logout} />
         
         <AuthenticatedRoute 
         exact path="/songs" 
         component={SongList} 
         songs = {this.state.songs}
         authenticated = {this.state.authenticated} /> 
         <Route path="/songs/:songId" render={(props) => {
           const song = this.state.songs[props.match.params.songId];
           return (
             song
             ? <ChordEditor song={song} updateSong ={this.updateSong} />
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
