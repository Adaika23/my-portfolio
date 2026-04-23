// Contact component shows your contact information
function Contact() {
  return (
    // Main section wrapper
    <section id="contact" className="contact">
      
      {/* Section title */}
      <h2>Contact</h2>

      {/* Card container (matches About + Project style) */}
      <div className="contact-card">

        {/* Email (clickable mail link) */}
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:ochaladaika@gmail.com">
            ochaladaika@gmail.com
          </a>
        </p>

        {/* GitHub profile */}
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Adaika23"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adaika23
          </a>
        </p>

        {/* LinkedIn profile */}
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/adaika-obub-771b9a108/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adaika Obub
          </a>
        </p>

      </div>
    </section>
  );
}

// Export component
export default Contact;