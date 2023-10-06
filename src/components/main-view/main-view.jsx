import React from "react";
import {useState} from "react";
import MovieCard from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";

const MainView = () => {

    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Silence of the Lambs",
            description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
            director: "Jonathan Demme",
            genre: "Thriller",
            image: "arrival.jpeg"
        },
        {
            id: 2,
            title: "Harry Potter and the Sorcerer's Stone",
            description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
            director: "Chris Columbus",
            genre: "Fantasy Adventure"
            //image: "harry_potter_and_the_philosopher_stone.jpeg"
        },
        {
            id: 3,
            title: "Lord of the Rings:The Return of the King",
            description: "A 2003 epic fantasy adventure film directed by Peter Jackson from a screenplay by Fran Walsh",
            director: "Peter Jackson",
            genre: "Fantasy Adventure"
            //image: "the_Lord_of_the_rings_the_return_of_the_king.jpeg"
        },
        {
            id: 4,
            title: "Black Hawk Down",
            description: "Black Hawk Down is a 2001 war film directed and produced by Ridley Scott, and co-produced by Jerry Bruckheimer, from a screenplay by Ken Nolan.",
            director: "Ridley Scott",
            genre: "Action"
            //image: "black_hawk_down.jpeg"
        },
        {
            id: 5,
            title: "Blended",
            description: "After a bad blind date, a man and woman find themselves stuck together at a resort in Africa, where their attractions grows as their respective kids.",
            director: "Frank Coraci ",
            genre: "Comedy"
            //image: "blended.jpeg"
        }
    ]);
    
    const [selectedMovie, setSelectedMovie] = useState(null);
    //Update the selectedMovie state to refer to the movie object that was clicked. The app will render that movie’s details.
    if (selectedMovie) {
        
        return <MovieView movie={selectedMovie} onBackClick ={() => setSelectedMovie(null)}/>;
     }
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
      }
    return (
       
        <div>
          <h2>Movie List</h2>
          {movies.map((movie) => (
                <MovieCard 
                key={movie.id} 
                movie={movie}
                onMovieClick ={(newSelectedMovie) =>{
                    setSelectedMovie(newSelectedMovie);
                }}
                />
            )
            )}
        </div>
      );
   
}
export default MainView;