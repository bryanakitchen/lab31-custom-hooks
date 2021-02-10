import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharactersPages from './CharactersPages';

describe('CharactersPages container', () => {
  it('fetches and displays a list of characters', () => {
    render(<CharactersPages />);

    screen.getByAltText('loading');
  });
});
