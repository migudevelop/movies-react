import React, { useState, useEffect, useContext } from 'react';
import { getMovies } from 'services/axios_service/movies';
import Layout from 'components/Layout/Layout';
import MovieCard from 'components/commons/MovieCard/MovieCard';
import { BackdropContext } from 'services/context/backdropContext';

import { IEMovieProps } from 'interfaces/moviecard';

function Movies() {
  const [movies, setMovies] = useState<[] | any>(null);
  const { showLoader, hideLoader } = useContext(BackdropContext);

  useEffect(() => {
    if (movies == null) {
      showLoader();
      getMovies()
        .then(({ data }) => {
          hideLoader();
          setMovies(data);
        })
        .catch((err) => hideLoader());
    }
  }, []);

  return (
    <Layout>
      <div className="movies-wrapper">
        {movies &&
          movies.map(({ imageURL, name, sortDescription, rating }: IEMovieProps, index: number) => (
            <MovieCard key={index} imageURL={imageURL} name={name} description={sortDescription} rating={rating} />
          ))}
      </div>
    </Layout>
  );
}

export default Movies;
