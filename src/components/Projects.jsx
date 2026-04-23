// Projects component = displays your portfolio projects section
function Projects() {
  return (
    // Main projects section
    <section id="projects" className="projects">
      {/* Section title */}
      <h2>Projects</h2>

      {/* Grid container that holds all project cards */}
      <div className="projects-grid">

        {/* =========================
            Project 1: Portfolio Website
           ========================= */}
        <div className="project-card">
          {/* Project image */}
          <img
            src="/portfolio-image.png"
            alt="Adaika Portfolio Website"
            className="project-image"
          />

          {/* Project title */}
          <h3>Adaika Portfolio Website</h3>

          {/* Project description */}
          <p>
            A personal portfolio website built to showcase my skills, projects,
            and contact information with a clean, responsive design.
          </p>

          {/* Links for project code and live demo */}
          <div className="project-links">
            <a
              href="https://github.com/adaika23/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>

          </div>
        </div>

        {/* =========================
            Project 2: SOC Dashboard
           ========================= */}
        <div className="project-card">
          {/* Project image */}
          <img
            src="/soc-dashboard.png"
            alt="SOC Threat Detection Dashboard"
            className="project-image"
          />

          {/* Project title */}
          <h3>SOC Threat Detection Dashboard</h3>

          {/* Project description */}
          <p>
            A security-focused web application with frontend, backend, and
            database integration for monitoring alerts and suspicious activity.
          </p>

          {/* Links for project code and live demo */}
          <div className="project-links">
            <a
              href="https://github.com/adaika23/soc-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>

          </div>
        </div>

        {/* =========================
            Project 3: Real-Time Systems
           ========================= */}
        <div className="project-card">
          {/* Project image */}
          <img
            src="/real-time-systems.jpeg"
            alt="Real-Time Systems Project"
            className="project-image"
          />

          {/* Project title */}
          <h3>Real-Time Systems</h3>

          {/* Project description */}
          <p>
            Applied real-time systems theory through scheduling algorithms,
            timing analysis, and kernel-level implementation in C and Linux.
          </p>

          {/* Links for project code and live demo */}
          <div className="project-links">
            <a
              href="https://github.com/rteclabclass/project1-group12"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;