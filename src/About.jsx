
import { Link } from "react-router";
import "./About.css";

export const About = () => {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">ABOUT WAHABTECHX</span>

          <h1>
            Your Ultimate
            <span> Movie Destination</span>
          </h1>

          <p>
            Discover the magic of cinema. Explore movies,
            learn about your favorite actors, and experience
            stories that inspire the world.
          </p>

          <Link to="/movie" className="about-btn">
            Explore Movies →
          </Link>
        </div>
      </section>

      {/* About Content */}
      <section className="about-intro">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
            alt="Cinema movie theater"
          />
        </div>

        <div className="about-text">
          <span className="about-small-title">WHO WE ARE</span>

          <h2>
            Bringing the World of Movies Closer to You
          </h2>

          <p>
            WAHABTECHX is a movie discovery platform designed
            for people who love cinema. Our goal is to make
            discovering movies and exploring movie information
            simple and enjoyable.
          </p>

          <p>
            From movie ratings and release dates to actors,
            directors, and interesting stories, we bring
            important movie information together in one place.
          </p>

          <Link to="/contact" className="about-text-link">
            Contact Our Team →
          </Link>
        </div>

      </section>

      {/* Mission and Vision */}
      <section className="mission-section">

        <div className="about-section-heading">
          <span>OUR PURPOSE</span>
          <h2>Mission & Vision</h2>
          <p>
            What motivates us to build a better movie experience.
          </p>
        </div>

        <div className="mission-container">

          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide an easy and enjoyable platform where
              movie lovers can discover films and access
              useful movie information.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">🚀</div>
            <h3>Our Vision</h3>
            <p>
              To create a modern movie discovery experience
              that connects people with amazing stories
              from around the world.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">💡</div>
            <h3>Our Values</h3>
            <p>
              We believe in simplicity, innovation,
              user-friendly design, and making information
              accessible to everyone.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="about-features">

        <div className="about-section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Explore More With Us</h2>
        </div>

        <div className="about-feature-grid">

          <div className="about-feature">
            <span>🎬</span>
            <h3>Movie Discovery</h3>
            <p>Explore different movies and genres.</p>
          </div>

          <div className="about-feature">
            <span>⭐</span>
            <h3>IMDb Ratings</h3>
            <p>Discover movie ratings and reviews information.</p>
          </div>

          <div className="about-feature">
            <span>👨‍🎤</span>
            <h3>Cast Information</h3>
            <p>Learn about actors, directors, and writers.</p>
          </div>

          <div className="about-feature">
            <span>📖</span>
            <h3>Movie Stories</h3>
            <p>Explore plots and interesting movie details.</p>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="about-cta">
        <h2>Let's Explore the World of Cinema!</h2>

        <p>
          Your next favorite movie is waiting for you.
        </p>

        <Link to="/movie" className="about-btn">
          Discover Movies →
        </Link>
      </section>

    </main>
  );
};
