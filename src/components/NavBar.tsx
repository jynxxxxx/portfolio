import '../App.css';

interface NavBarProps {
  activeLink: string;
  handleNavLinkClick: (link: string) => void;
}

export default function NavBar({ activeLink, handleNavLinkClick }: NavBarProps) {
  return (
    <div className='fixed h-fit top-0 left-0 right-0 flex justify-between items-center py-2 px-8 z-50 bg-opacity-20 backdrop-blur-sm'>
      <a href="#hero" className="text-3xl font-extrabold ml-8 text-gradient-primary" onClick={() => handleNavLinkClick('hero')}>J.</a>
      <ul className="flex gap-4 text-sm">
        <li className={`navlink ${activeLink === 'projects' ? 'active' : ''}`}>
          <a href="#projects" className="navtext" onClick={() => handleNavLinkClick('projects')}>
            Projects
          </a>
        </li>
        <li className={`navlink hover:text-gradient-primary ${activeLink === 'about' ? 'active' : ''}`}>
          <a href="#about" className="navtext" onClick={() => handleNavLinkClick('about')}>
            About Me
          </a>
        </li>
        <li className={`navlink hover:text-gradient-primary ${activeLink === 'techstack' ? 'active' : ''}`}>
          <a href="#techstack" className="navtext" onClick={() => handleNavLinkClick('techstack')}>
            Tech Stack
          </a>
        </li>
        <li className={`navlink ${activeLink === 'contact' ? 'active' : ''}`}>
          <a href="#contact" className="navtext" onClick={() => handleNavLinkClick('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
