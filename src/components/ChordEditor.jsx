import React, { Component } from 'react';
import ChordSheetJS from 'chordsheetjs';

class ChordEditor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Type some lyrics here' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    getChordMarkup() {
        var formatter = new ChordSheetJS.HtmlFormatter(),
        parser = new ChordSheetJS.ChordProParser(),
        song = parser.parse(this.state.value);
        // this return will give us raw html
        return { __html: formatter.format(song )};
    }

    render() {
        return (
            <div>
                </div>
        );
    }
}

export default ChordEditor;