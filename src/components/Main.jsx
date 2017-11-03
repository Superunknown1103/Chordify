import React, { Component } from 'react';
import bass from '../images/bass.jpg';
import piano from '../images/piano.jpg';
import sax from '../images/sax.jpg';

class Main extends Component {
    render() {
        return (
<div className="img-container" style= {{"margin": "100px"}}>
<h1 style={{color: '#696969', 'text-align': 'center', 'margin-bottom': '1em'}}>Every songwriter needs a chord sheet.</h1>
<img src={bass} style={{"border-style" : "solid", "border-width": "5px", "border-color": "black", height: "30vh", width: 
"33%"}} alt="bass"></img>
<img src={piano} style={{"border-style" : "solid", "border-width": "5px", "border-color": "black", height: "30vh", width: 
"33%"}} alt="piano"></img>
<img src={sax} style={{"border-style" : "solid", "border-width": "5px", "border-color": "black", height: "30vh", width: 
"33%"}} alt="sax"></img>
</div>
        )
}
}

export default Main;
