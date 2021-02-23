import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CoreContext } from 'services/context/coreContext.js';
import { ROUTER_PAGES } from 'components/Router/constants.js';
import { IEMovieProps } from 'interfaces/movies.tsx';
import image from 'assets/images/black-widow.jpg';
import Rating from '@material-ui/lab/Rating';

function MovieCard({ name = '', sortDescription = '', rating = 0, ...props }: IEMovieProps) {
  const { state } = useContext(CoreContext);
  const history = useHistory();

  const goTo = () => {
    history.push({
      pathname: ROUTER_PAGES.MOVIE_DETAIL,
      state: { image: image, name, sortDescription, rating, ...props },
    });
  };

  return (
    <div className="moviecard-wrapper">
      <div className="moviecard" onClick={goTo}>
        <div className="text-center">
          <Rating name="read-only" value={rating} readOnly={!state.isLogged} />
        </div>
        <img src={image} className="img-fluid img-thumbnail" alt={name} />
        <div className="card-body">
          <h4>{name}</h4>
          <p className="card-text">{sortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
