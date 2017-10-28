import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ChordEditor from './components/ChordEditor.jsx';

class App extends Component {
  constructor() {
    super();
    this.updateSong = this.updateSong.bind(this);
    this.state = {
       songs: {
       "1": {id: 1, chordpro: "Lyrics for song 1." },
       "2": {id: 2, chordpro: "Lyrics for song 2."}
       }
    };
  }

  updateSong(song){
    const songs = {...this.state.songs};
    songs[song.id] = song
    this.setState({songs});
  }
  render() {
    return (
     <div className="wrapper">
       <Header />
       <BrowserRouter>
       <div className="main-content">
       <div className="workspace">
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
       </BrowserRouter>
       <Footer />
       </div>
    );
  }
}

export default App;
