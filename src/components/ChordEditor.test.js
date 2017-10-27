import React from 'react';
import { shallow } from 'enzyme';
import ChordEditor from './ChordEditor';

describe('<ChordEditor />', () => {
it('renders an editor area', () => {
  const editor = shallow(<ChordEditor />);
  expect(editor.find('textarea').length).toEqual(1);
});

it('renders an output area', () => {
  const editor = shallow(<ChordEditor />);
  expect(editor.find('div.chord-output').length).toEqual(1);
})
});
