/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import singleAPIResponse from '../fixtures/oneCharacter.json';
import DetailPage from './DetailPage';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../state/themeContext';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/character/', (req, res, ctx) => {
    return res(ctx.json(singleAPIResponse));
  })
);

describe('DetailPage test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
    
  it('renders DetailPage - page should start as loading but end in a detail page of one character', async() => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <DetailPage match={{ params: { id: '5f5fb4bbbfd05c2aed82e460' } }} />
        </MemoryRouter>
      </ThemeProvider>
    );
  
    screen.getAllByAltText('loading');

    const character = await screen.findByTestId('character');
  
    return waitFor(() => {
      expect(character).not.toBeEmptyDOMElement();
    });
  });
});
