import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react-native';

import App from '../App';
import initialState from '../src/state/store/initialState'

describe('<App />', () => {
  const mockStore = configureStore([]);
  const store = mockStore(initialState);
  
  it('displays app title', () => {
    const screen = render(<Provider store={store}><App /></Provider>)
    // console.log(screen.debug())
    expect(screen.getByText('TuneShare')).toBeTruthy()
    // console.table(screen.getByText('TuneShare').props)
    expect(screen.getByText('TuneShare').props.style.fontSize).toEqual(17)
  });
});