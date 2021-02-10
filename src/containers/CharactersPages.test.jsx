import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharactersPages from '../containers/CharactersPages';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import charactersAPIResponse from '../fixtures/characters.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json(charactersAPIResponse));
  })
);

describe('CharactersPages container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays a list of characters', async() => {
    render(<MemoryRouter><CharactersPages /></MemoryRouter>);

    screen.getByAltText('loading');

    const listOfCharacters = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
