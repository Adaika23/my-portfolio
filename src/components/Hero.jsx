// Hero component = top section of your portfolio (first impression)
function Hero() {
  return (
    // Add className so CSS controls layout (important)
    <section className="hero" id="home">

      {/* Profile Image */}
      <img
        src="/my-photo.jpeg"          // Image from public folder
        alt="Adaika Obub"
        className="hero-img"          // Use CSS instead of inline styles
      />

      {/* Your Name */}
      <h1>Adaika Obub</h1>

      {/* Subtitle / Branding */}
      <p className="hero-subtitle">
        Full-Stack Developer | Building Secure & Scalable Web Applications
      </p>

      {/* Buttons Container */}
      <div className="hero-buttons">

        {/* Resume Button */}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn-primary">Download Resume</button>
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/Adaika23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-secondary">GitHub</button>
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com/in/adaika-obub-771b9a108/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-secondary">LinkedIn</button>
        </a>

      </div>
    </section>
  );
}

export default Hero;