import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import MovieCards from "./components/MovieCards";


test('renders App Farmu', () => {
  render(<App />);
  const element = screen.getByText(/Farmu/i);
  expect(element).toBeInTheDocument();
});

test('renders Movie cards', () => {
  const listMovies = [
    {
        "adult": false,
        "backdrop_path": "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        "genre_ids": [
            16,
            28,
            12,
            35,
            10751,
            14
        ],
        "id": 315162,
        "original_language": "en",
        "original_title": "Puss in Boots: The Last Wish",
        "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        "popularity": 10011.23,
        "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        "release_date": "2022-12-07",
        "title": "Puss in Boots: The Last Wish",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 2366
    }
    ];
    render(<MovieCards movieList={listMovies} showDetails={false}/>);

  const element = screen.getByText(/Puss in Boots: The Last Wish/i);
  expect(element).toBeInTheDocument();
});

