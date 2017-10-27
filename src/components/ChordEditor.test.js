import React from 'react';
import { shallow, mount, ShallowRendererProps } from 'enzyme';
import ChordEditor from './ChordEditor';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

configure({ adapter: new Adapter() });

describe('<ChordEditor />', () => {
it('renders an editor area', () => {
    const editor = shallow(<ChordEditor song={{chordpro: ""}} />);
    // expect a text area in our chordeditor -> find 1
   expect(editor.find('textarea').length).toEqual(1);
  });

it('renders an editor area', () => {
  const editor = shallow(<ChordEditor song={{chordpro: ""}}/>);
  // expect a text area in our chordeditor -> find 1
 expect(editor.find('div.chord-output').length).toEqual(1);
});

it('renders the chord chart output', () => {
  const editor = shallow(<ChordEditor song={{chordpro: "[B]New [Am]Lyric" }} />);
  const expectedOutput = 
  '<table>' + 
  '<tr>' +
  '<td class="chord">B</td>' +
  '<td class="chord">Am</td>'
  '</tr>' +
  '<tr>' +
  '<td class="lyrics">New&nbsp;</td>' +
  '<td class="lyrics">Lyric&nbsp;</td>' +
  '</tr>' +
  '</table>';

// take the editor, find the chord output, and get the html.
// expect the real output to be greater than -1.
  const realOutput = editor.find('div.chord-output').html();
  expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});

