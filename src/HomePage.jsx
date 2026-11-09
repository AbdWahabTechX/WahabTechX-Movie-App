import { Link, NavLink } from "react-router";
import './HomePage.css'
export const Home = () => {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            WELCOME TO WAHABTECHX
          </span>

          <h1>
            Discover Movies.
            <br />
            <span>Experience Stories.</span>
          </h1>

          <p>
            Explore the world of cinema. Discover your favorite
            movies, legendary actors, exciting adventures and
            unforgettable stories all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/movie" className="btn-primary">
              Explore Movies →
            </Link>

            <NavLink to="/about" className="btn-secondary">
              Learn More
            </NavLink>
          </div>

          <div className="hero-stats">
            <div>
              <h3>1000+</h3>
              <span>Movies</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Entertainment</span>
            </div>

            <div>
              <h3>∞</h3>
              <span>Stories</span>
            </div>
          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="features">

        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Your Movie World</h2>
          <p>
            Everything you need to explore the world of movies.
          </p>
        </div>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3>Explore Movies</h3>
            <p>
              Discover movies from different genres and explore
              amazing cinematic experiences.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Movie Ratings</h3>
            <p>
              Check IMDb ratings and discover what makes
              your favorite movies special.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🍿</div>
            <h3>Movie Details</h3>
            <p>
              Get information about actors, directors, stories
              and everything about your favorite films.
            </p>
          </div>

        </div>

      </section>

      {/* Call To Action */}
      <section className="home-cta">
        <h2>Ready for Your Next Movie?</h2>
        <p>
          Start exploring and find your next favorite story.
        </p>

        <NavLink to="/movie" className="btn-primary">
          Browse Movies →
        </NavLink>
      </section>

    </main>
  );
};
