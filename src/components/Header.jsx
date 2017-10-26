import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Chordify</h1>
                <h3>Welcome to Chordify, the ultimate tool for efficient songwriting.
                Type the lyrics to your song, add square brackets to insert a chord,
                and boom you have yourself a chord chart. Thanks to a wonderful NPM
                package called ChordSheetJS, this is all possible.</h3>
                </header>
        );
    }
}

export default Header;