import { useLoaderData, Link } from "react-router";
import "./MovieDetails.css";

export const MovieDetails = () => {

    const movie = useLoaderData();

    return (
        <div className="details-container">

            <div className="details-card">

                {/* Movie Poster */}
                <div className="details-poster">
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                    />
                </div>

                {/* Movie Information */}
                <div className="details-content">

                    <h1>{movie.Title}</h1>

                    <div className="movie-meta">
                        <span>{movie.Year}</span>
                        <span>{movie.Rated}</span>
                        <span>{movie.Runtime}</span>
                    </div>

                    <div className="imdb-rating">
                        ⭐ IMDb Rating: {movie.imdbRating}/10
                    </div>

                    <div className="movie-genres">
                        {movie.Genre?.split(", ").map((genre) => (
                            <span key={genre}>{genre}</span>
                        ))}
                    </div>

                    <h3>Storyline</h3>
                    <p className="movie-plot">{movie.Plot}</p>

                    <div className="details-info">

                        <p>
                            <strong>Director:</strong> {movie.Director}
                        </p>

                        <p>
                            <strong>Writer:</strong> {movie.Writer}
                        </p>

                        <p>
                            <strong>Actors:</strong> {movie.Actors}
                        </p>

                        <p>
                            <strong>Released:</strong> {movie.Released}
                        </p>

                        <p>
                            <strong>Language:</strong> {movie.Language}
                        </p>

                        <p>
                            <strong>Country:</strong> {movie.Country}
                        </p>

                        <p>
                            <strong>Awards:</strong> {movie.Awards}
                        </p>

                        <p>
                            <strong>Box Office:</strong> {movie.BoxOffice}
                        </p>

                    </div>

                    <Link to="/movie" className="back-btn">
                        ← Back to Movies
                    </Link>

                </div>

            </div>

        </div>
    );
};