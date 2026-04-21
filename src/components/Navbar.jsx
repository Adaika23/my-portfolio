function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px" }}>
      <h2>Adaika Obub</h2>

      <div>
        <a href="#home" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</a>
        <a href="#projects" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Projects</a>
        <a href="#contact" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;