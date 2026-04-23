// About component displays your personal introduction section
function About() {
  return (
    // Main section wrapper with class "about"
    <section className="about" id="about">
      
      {/* Section title */}
      <h2>About Me</h2>

      {/* Card container (this connects to .about-card CSS for styling + hover) */}
      <div className="about-card">
        
        {/* My personal description */}
        <p>
        I am a Computer Science graduate from San Diego State University with a strong interest in full-stack development, cybersecurity, and building real-world applications. I enjoy solving problems, learning new technologies, and creating projects that combine 
        practical skills with modern software development.
        </p>

      </div>
    </section>
  );
}

// Export the component so it can be used in App.jsx
export default About;