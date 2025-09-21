export const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export const getPosterUrl = (posterPath) => {
  return posterPath ? `${TMDB_IMAGE_BASE}${posterPath}` : null;
};

export const getBackdropUrl = (backdropPath) => {
  return backdropPath ? `${TMDB_IMAGE_BASE}${backdropPath}` : null;
};
