
import { useState } from "react";
import "./Contact.css";

export const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    setSuccess(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <main className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>GET IN TOUCH</span>
          <h1>Let's Start a <span>Conversation</span></h1>
          <p>
            Have a question, suggestion, or feedback?
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">

        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">

            <span className="contact-small-title">
              CONTACT INFORMATION
            </span>

            <h2>Let's Talk About Movies!</h2>

            <p className="contact-description">
              Whether you need help, have a suggestion,
              or simply want to share your thoughts,
              feel free to contact us.
            </p>

            <div className="contact-info-item">
              <div className="contact-icon">✉</div>
              <div>
                <h3>Email Us</h3>
                <p>support@wahabtechx.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">☎</div>
              <div>
                <h3>Call Us</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Our Location</h3>
                <p>Lahore, Pakistan</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>Follow Us</h3>

              <div className="social-links">
                <a href="https://facebook.com"
                   target="_blank" rel="noreferrer">f</a>

                <a href="https://instagram.com"
                   target="_blank" rel="noreferrer">◎</a>

                <a href="https://github.com"
                   target="_blank" rel="noreferrer">⌘</a>

                <a href="https://linkedin.com"
                   target="_blank" rel="noreferrer">in</a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-container">

            <h2>Send Us a Message</h2>

            <p>Fill out the form below and we'll get back to you.</p>

            {success && (
              <div className="success-message">
                Your message has been submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
};
