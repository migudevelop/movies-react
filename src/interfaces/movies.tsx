export interface IEMovieProps {
  name: string;
  sortDescription?: string;
  description?: string;
  rating?: number;
  genre?: string;
  type?: string;
}

export interface IEMovieFilters {
  genreFilter: string;
  typeFilter: string;
}
