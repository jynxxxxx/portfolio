import '../App.css';

interface NavBarProps {
  activeLink: string;
  handleNavLinkClick: (link: string) => void;
}

export default function NavBar({ activeLink, handleNavLinkClick }: NavBarProps) {
  return (
    <ul className="navbarbtns">
      <li className={`navlink ${activeLink === 'home' ? 'active' : ''}`}>
        <a href="#home" className="navtext" onClick={() => handleNavLinkClick('home')}>
          Home
        </a>
      </li>
      <li className={`navlink ${activeLink === 'about' ? 'active' : ''}`}>
        <a href="#about" className="navtext" onClick={() => handleNavLinkClick('about')}>
          About Me
        </a>
      </li>
      <li className={`navlink ${activeLink === 'projects' ? 'active' : ''}`}>
        <a href="#projects" className="navtext" onClick={() => handleNavLinkClick('projects')}>
          Projects
        </a>
      </li>
      <li className={`navlink ${activeLink === 'contact' ? 'active' : ''}`}>
        <a href="#contact" className="navtext" onClick={() => handleNavLinkClick('contact')}>
          Contact
        </a>
      </li>
    </ul>
  );
}
