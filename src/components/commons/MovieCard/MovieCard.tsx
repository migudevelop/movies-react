import React from 'react';
import { IEMovieProps } from 'interfaces/moviecard';
import imagen from 'assets/images/black-widow.jpg';
import Rating from '@material-ui/lab/Rating';

function MovieCard({ imageURL = '', name = '', description = '', rating = 0 }: IEMovieProps) {
  return (
    <div className="moviecard-wrapper">
      <div className="moviecard">
        <div className="text-center">
          <Rating name="read-only" value={rating} readOnly={false} />
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
