import React, { useState, useEffect, useContext } from 'react';
import { getMovies } from 'services/axios_service/movies';
import Layout from 'components/Layout/Layout';
import MovieCard from 'components/commons/MovieCard/MovieCard';
import { BackdropContext } from 'services/context/backdropContext';
import { CoreContext } from 'services/context/coreContext.js';
import { FormControl, Select, InputLabel } from '@material-ui/core';

import { IEMovieProps } from 'interfaces/moviecard';

const TYPES = ['Superheros', 'childish', 'cartoons'];
const GENRE = ['Action', 'Adventure', 'Comedy'];

function Movies() {
  const { showLoader, hideLoader } = useContext(BackdropContext);
  const { searchText } = useContext(CoreContext);
  const [movies, setMovies] = useState<[] | any>(null);

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
      <div className="selects-wrapper">
        <FormControl>
          <InputLabel htmlFor="grouped-native-select">Type</InputLabel>
          <Select native defaultValue="" id="grouped-native-select">
            <option aria-label="None" value="" />
            {TYPES.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="movies-wrapper">
        {movies &&
          movies
            .filter(({ name }: IEMovieProps) => name.toLowerCase().includes(searchText.textSearch.toLowerCase()))
            .map(({ imageURL, name, sortDescription, rating }: IEMovieProps, index: number) => (
              <MovieCard key={index} imageURL={imageURL} name={name} description={sortDescription} rating={rating} />
            ))}
      </div>
    </Layout>
  );
}

export default Movies;
