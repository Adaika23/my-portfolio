function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Container that holds all project cards */}
      <div className="projects-container">
        {/* Project 1 */}
        <div>
          <h3>Portfolio Website</h3>
          <p>
            A personal website to showcase my skills, projects, and contact information.
          </p>

          {/* GitHub link for this project */}
          <a
            href="https://github.com/Adaika23/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Code</button>
          </a>
        </div>

        {/* Project 2 */}
        <div>
          <h3>Full-Stack Application</h3>
          <p>
            A web application with frontend, backend, and database integration.
          </p>

          {/* GitHub link for this project */}
          <a
            href="https://github.com/Adaika23/soc-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Code</button>
          </a>
        </div>

        {/* Project 3 */}
        <div>
          <h3>UI Redesign Project</h3>
          <p>
            A modern redesign focused on clean layout, accessibility, and responsiveness.
          </p>

          {/* Replace # later with a real project link */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button>View Code</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;