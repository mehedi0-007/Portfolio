export function Navbar() {
  return (
    <nav id="navbar">
      <a className="nav-logo" href="#">
        <span>▸</span> Mehedi Hassan
      </a>
      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#timeline">journey</a></li>
      </ul>
      <a className="nav-cta" href="#contact">get in touch →</a>
    </nav>
  )
}
