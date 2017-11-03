import React, { Component } from 'react';
import bass from '../images/bass.jpg';
import piano from '../images/piano.jpg';
import sax from '../images/sax.jpg';
import styles from './styles.css.js';

class Main extends Component {
    render() {
        return (
    
<div className="imghold">
<img src={bass} style={{"border-style" : "solid", "border-width": "5px", "border-color": "black", height: "30vh", width: 
"33%"}} alt="bass"></img>
<img src={piano} style={{"border-style" : "solid", "border-width": "5px", "border-color": "black", height: "30vh", width: 
"33%"}} alt="piano"></img>
<img src={sax} style={{"border-style" : "solid", "border-width": "5px", "border-color": "black", height: "30vh", width: 
"33%"}} alt="sax"></img>
<h1 style={{color: 'black', 'text-align': 'center', 'margin-bottom': '1em', 'font-family' : 'Merienda'}}>Write songs faster.</h1>
<h3 style={{'text-align': 'center', position: 'relative', bottom: '20px'}}>Built for songwriters, by a songwriter.</h3>
<br />
<h4 style={{'font-family' : 'Merienda', 'background-color': '#FFFF00'}}>Auto-generated chord charts</h4>
<div className="textbox" style={{'font-family' : 'Ropa Sans'}}>Chordify will automatically place your chords right on top of the words. Songs can be written faster and look more organized. No one more
    endless word processor battles. </div>
    <br />
<h4 style={{'font-family' : 'Merienda', 'background-color': '#FF0000 '}}>Space for your songs</h4>
<div className="textbox" style={{'font-family' : 'Ropa Sans'}}>Keep your songs saved in one place. Make as many songs as you want and come open them up when you are practicing or performing. Write songs here
    then copy and paste them onto other sites.</div>
    <br />
    <h4 style={{'font-family' : 'Merienda', 'background-color': '#00FF33'}}>Future Features</h4>
<div className="textbox" style={{'font-family' : 'Ropa Sans'}}>I have ambitions for adding an auto-chord sensor when you are typing a chord in the brackets, as well as perhaps a chord dictionary or a suggested
    chord-type feature.
</div>
    <br />
</div>
        )
}
}

export default Main;
