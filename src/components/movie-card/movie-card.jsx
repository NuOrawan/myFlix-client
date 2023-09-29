export default MovieCard;

const MovieCard = (movie, onMovieClick) => {
    return 
        (
            <div 
                onClick= {() => {
                    onMovieClick(movie);
                }}
            >
                {movie.title}
            </div>
        );
}; 