import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ChordEditor from './components/ChordEditor.jsx';

class App extends Component {
  render() {
    return (
     <div className="wrapper">
       <Header />
       <div className="workspace">
         <ChordEditor />
         </div>
           <Footer />
       </div>
    );
  }
}

export default App;
