import React, { useState, useEffect, useContext } from 'react';
import { getMovies } from 'services/axios_service/movies';
import Layout from 'components/Layout/Layout';
import MovieCard from 'components/commons/MovieCard/MovieCard';
import { BackdropContext } from 'services/context/backdropContext';
import { CoreContext } from 'services/context/coreContext.js';
import { FormControl, Select, InputLabel } from '@material-ui/core';

import { IEMovieProps, IEMovieFilters } from 'interfaces/movies.tsx';

const TYPES = ['Superheros', 'childish', 'cartoons'];
const GENRE = ['Action', 'Adventure', 'Comedy'];

function Movies() {
  const { showLoader, hideLoader } = useContext(BackdropContext);
  const { searchText } = useContext(CoreContext);
  const [movies, setMovies] = useState<[] | any>(null);
  const [movieFilters, setMovieFilters] = useState<IEMovieFilters>({ genreFilter: '', typeFilter: '' });

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

  const handleFilterChange = (event: React.ChangeEvent<any>) => {
    setMovieFilters({ ...movieFilters, [event.target.id]: event.target.value });
  };

  return (
    <Layout>
      <div className="selects-wrapper">
        <FormControl className="mr-5">
          <InputLabel htmlFor="grouped-native-select">Type</InputLabel>
          <Select native defaultValue="" onChange={handleFilterChange} id="typeFilter">
            <option aria-label="None" value="" />
            {TYPES.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl className="mr-5">
          <InputLabel htmlFor="grouped-native-select">Genre</InputLabel>
          <Select native defaultValue="" onChange={handleFilterChange} id="genreFilter">
            <option aria-label="None" value="" />
            {GENRE.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="movies-wrapper">
        {movies &&
          movies
            .filter(
              ({ name, genre, type }: IEMovieProps) =>
                name.toLowerCase().includes(searchText.textSearch.toLowerCase()) &&
                genre?.toLowerCase().includes(movieFilters.genreFilter.toLowerCase()) &&
                type?.toLowerCase().includes(movieFilters.typeFilter.toLowerCase())
            )
            .map(({ imageURL, name, sortDescription, rating }: IEMovieProps, index: number) => (
              <MovieCard key={index} imageURL={imageURL} name={name} description={sortDescription} rating={rating} />
            ))}
      </div>
    </Layout>
  );
}

export default Movies;
