import '../App.css';

interface NavBarProps {
  activeLink: string;
  handleNavLinkClick: (e:any, link: string) => void;
}

export default function NavBar({ activeLink, handleNavLinkClick }: NavBarProps) {
  return (
    <div className='fixed h-fit top-0 left-0 right-0 flex justify-between items-center py-2 px-4  sm:px-8 z-50 bg-opacity-20 backdrop-blur-sm'>
      <a href="#hero" className="text-3xl font-extrabold ml-2 sm:ml-8 text-gradient-primary" onClick={(e) => handleNavLinkClick(e, 'hero')}>
        J.
      </a>
      <ul className="flex gap-2 sm:gap-4 text-xs sm:text-sm">
        <li className={`navlink ${activeLink === 'projects' ? 'active' : ''}`}>
          <a href="#projects" className="navtext" onClick={(e) => handleNavLinkClick(e, 'projects')}>
            Projects
          </a>
        </li>
        <li className={`navlink ${activeLink === 'about' ? 'active' : ''}`}>
          <a href="#about" className="navtext" onClick={(e) => handleNavLinkClick(e, 'about')}>
            About Me
          </a>
        </li>
        <li className={`navlink ${activeLink === 'techstack' ? 'active' : ''}`}>
          <a href="#techstack" className="navtext" onClick={(e) => handleNavLinkClick(e, 'techstack')}>
            Tech Stack
          </a>
        </li>
        <li className={`navlink ${activeLink === 'contact' ? 'active' : ''}`}>
          <a href="#contact" className="navtext" onClick={(e) => handleNavLinkClick(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
