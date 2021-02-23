import React, { useContext } from 'react';
import { CoreContext } from 'services/context/coreContext.js';
import { IEMovieProps } from 'interfaces/movies.tsx';
import imagen from 'assets/images/black-widow.jpg';
import Rating from '@material-ui/lab/Rating';

function MovieCard({ imageURL = '', name = '', description = '', rating = 0 }: IEMovieProps) {
  const { state } = useContext(CoreContext);
  return (
    <div className="moviecard-wrapper">
      <div className="moviecard">
        <div className="text-center">
          <Rating name="read-only" value={rating} readOnly={!state.isLogged} />
        </div>
        <img src={imagen} className="img-fluid img-thumbnail" alt={name} />
        <div className="card-body">
          <h4>{name}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
