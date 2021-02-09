/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList 
          characters={[
            {
              id: '5f5fb4bbbfd05c2aed82e460',
              name: 'Admiral',
              image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138'
            },
            {
              id: '5f5fb4bbbfd05c2aed82e462',
              name: 'Agnes',
              image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/42/Agnes_NH.png/revision/latest?cb=20200804230432'
            }
          ]} />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
