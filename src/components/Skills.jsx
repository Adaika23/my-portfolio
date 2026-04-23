// Skills component = displays your technical skills
function Skills() {
  return (
    // Section wrapper with ID for navigation
    <section id="skills" className="skills">

      {/* Section title */}
      <h2>Skills</h2>

      {/* Container for skill tags */}
      <div className="skills-container">

        {/* Each span = one skill */}
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Next.js</span>
        <span>Tailwind</span>
        <span>Git/GitHub</span>
        <span>SQL</span>
        <span>Python</span>
        <span>Java</span>
        <span>C, C++</span>

      </div>
    </section>
  );
}

// Export component
export default Skills;