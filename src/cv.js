import React from "react";
import "./styles.css"; // Assuming your CSS is in the same folder

function CV() {
  // Optionally, you can handle form submission here
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4">Luis Rafael Aspe</h1>
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="container my-5">
        <h2>Welcome to My CV</h2>
        <p>
          Hi, I'm Luis Rafael Aspe, a 3rd year college student passionate about
          learning and technology.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am an enthusiastic student who enjoys science, coding, and
            participating in school clubs.
          </p>

          {/* Education */}
          <h3>Education</h3>
          <ul>
            <li>Elementary - Sisters of Mary Immaculate School</li>
            <li>Senior High School - Letran Calamba</li>
            <li>College - Lyceum of Alabang</li>
          </ul>

          {/* School Activities */}
          <h3>School Activities</h3>
          <ul>
            <li>President of the Science Club</li>
            <li>Volunteer at local community events</li>
          </ul>

          {/* Skills */}
          <h3>Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Python Programming</li>
            <li>Public Speaking</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container my-5">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} id="contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input type="text" className="form-control" id="subject" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p>&copy; 2025 Luis Rafael Aspe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default CV;
