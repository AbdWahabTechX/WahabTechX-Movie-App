import { NavLink } from "react-router";
import "./Card.css";

export const Movicard = ({ curMovie }) => {

    return (
        <div className="movie-card">

            <div className="movie-poster">
                <img
                    src={curMovie.Poster !== "N/A" ? curMovie.Poster: "/no-image.png"}
                    alt={curMovie.Title}
                />
            </div>

            <div className="movie-info">
                <h2>{curMovie.Title}</h2>

                

               <NavLink to={`/movie/${curMovie.imdbID}`}>
                 <button className="movie-btn">
                    View Details
                </button>
               </NavLink>
            </div>

        </div>
    );
};


{/* <p>
                    <strong>Year:</strong> {curMovie.Year}
                </p>

                <p>
                    <strong>Type:</strong> {curMovie.Type}
                </p>

                <p>
                    <strong>IMDb ID:</strong> {curMovie.imdbID}
                </p> */}