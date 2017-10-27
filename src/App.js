import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ChordEditor from './components/ChordEditor.jsx';

class App extends Component {
  constructor() {
    super();
    this.updateSong = this.updateSong.bind(this);
    this.state = {
      song: {chordpro: "Type lyrics here." }
    };
  }

  updateSong(song){
    this.setState({song: song});
  }
  render() {
    return (
     <div className="wrapper">
       <Header />
       <div className="workspace">
         <ChordEditor song={this.state.song} updateSong={this.updateSong} />
         </div>
           <Footer />
       </div>
    );
  }
}

export default App;
