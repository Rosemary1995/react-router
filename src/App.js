import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

const App = () => {
  // Sample movie data
  const movies = [
    { id: 1, title: 'Inception', description: 'A mind-bending thriller.', trailerLink: 'https://example.com/inception-trailer' },
    { id: 2, title: 'Interstellar', description: 'A space epic.', trailerLink: 'https://example.com/interstellar-trailer' }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetailPage movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;

