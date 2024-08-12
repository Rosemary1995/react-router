import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
    </div>
  );
};

export default MovieDetailPage;
