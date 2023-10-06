
// Allow users to see more details about each movie when each movie card is clicked
export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
         <img src = {movie.image} alt = {movie.title} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
                <span>Genre: </span>
                <span>{movie.genre}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.director}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };

export default MovieView;