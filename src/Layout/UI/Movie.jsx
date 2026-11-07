import { useLoaderData } from "react-router"
import { Getmoviedata } from "../../../../Api/GetApidata";
import { Movicard } from "./Card";
import './Movie.css'

export const Movie = () =>{
    const movieData = useLoaderData();

    console.log(movieData);
    return(
        <div className="movie-container">
        {movieData.Search.map((curMovie) => (
            <Movicard
                key={curMovie.imdbID}
                curMovie={curMovie}
            />
        ))}
    </div>
)}