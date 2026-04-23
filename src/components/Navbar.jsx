// Navbar component = top navigation bar
function Navbar() {
  return (
    // Main navigation container
    <nav className="navbar">

      {/* Your name/logo */}
      <h2 className="logo">Adaika Obub</h2>

      {/* Navigation links */}
      <div className="nav-links">
        {/* Scrolls to Hero section */}
        <a href="#home">Home</a>
        
        {/*Scrolls to Skills*/}
         <a href="#skills">Skills</a>

        {/* Scrolls to Projects section */}
        <a href="#projects">Projects</a>

        {/* Scrolls to Contact section */}
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
}

// Export component
export default Navbar;