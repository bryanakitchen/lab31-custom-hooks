import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharactersPages from '../containers/CharactersPages';

describe('CharactersPages container', () => {
  it('fetches and displays a list of characters', async() => {
    render(<CharactersPages />);

    screen.getByAltText('loading');

    const listOfCharacters = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
