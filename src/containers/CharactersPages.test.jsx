/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import charactersAPIResponse from '../fixtures/characters.json';
import CharactersPages from './CharactersPages';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../state/themeContext';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json(charactersAPIResponse));
  })
);

describe('CharactersPages test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
    
  it('renders CharactersPages - page should start as loading but end in a list of characters', async() => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <CharactersPages />
        </MemoryRouter>
      </ThemeProvider>
    );
  
    screen.getAllByAltText('loading');

    const listOfCharacters = await screen.findByTestId('characters');
  
    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
