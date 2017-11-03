import React, { Component } from 'react';
import { Breadcrumb } from '@blueprintjs/core';
import ChordSheetJS from 'chordsheetjs';
import 'core-js/es6/map';
import 'core-js/es6/set';

class ChordEditor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const song = {...this.props.song};
        song.chordpro = event.target.value;
        this.props.updateSong(song);
    }

    getChordMarkup() {
        var formatter = new ChordSheetJS.HtmlFormatter(),
        parser = new ChordSheetJS.ChordProParser(),
        song = parser.parse(this.props.song.chordpro);
        // this return will give us raw html
        return { __html: formatter.format(song)};
    }

    render() {
        return (
            <div>
                To add chords, simple enclose the chord in brackets [Bminor]. The output will autogenerate
                a chord chart. The application will auto-save your progress. Happy songwriting!
                <br />
                <br />
                <ul className="pt-breadcrumbs">
                    <li><Breadcrumb href="/songs" text="Songs" /></li>
                    <li><Breadcrumb href="/songs" text={this.props.song.title} /></li>
                    </ul>
                <h2 style={{margin: "0.5em 0"}}>{this.props.song.title}</h2>
            <div className="chord-editor">
                <div className="panel">
                    <h3>Input</h3>
                    <textarea
                    style={{width: "100%", height: "100%"}}
                    onChange={this.handleChange}
                    value={this.props.song.chordpro} />
                    </div>
                <div className="panel">
                    <h3>Output</h3>
                    <div
                    style={{width: "100%", height: "100%", fontFamily: "monospace"}}
                    className="chord-output"
                    dangerouslySetInnerHTML={this.getChordMarkup()}/>
                </div>
                </div>
                </div>
        );
    }
}

export default ChordEditor;