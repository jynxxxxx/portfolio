import Home from "../sections/Home";
import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import { Contact } from "../sections/Contact";
import '../App.css'
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

export default function MainLayout() {
  const [activeLink, setActiveLink] = useState('home');
  const [headerStyle, setHeaderStyle] = useState({
    backgroundImage: 'linear-gradient(to left, rgb(241, 63, 107), rgb(247, 132, 78))'
  });

  const handleNavLinkClick = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setHeaderStyle({
      backgroundImage: getBackgroundColor(activeLink),
    });

    console.log(headerStyle)
  }, [activeLink]);

  const getBackgroundColor = (link: string) => {
    switch (link) {
      case 'home':
        return 'linear-gradient(to right, #ED1E79, #662D8C)';
      case 'about':
        return 'linear-gradient(to right, #662D8C, #4e94ca)';
      case 'projects':
        return 'linear-gradient(to right, #4e94ca, #7fd8e7)';
      case 'contact':
        return 'linear-gradient(to right, #7fd8e7, #0C03BA)';
      default:
        return 'default color';
    }
  };

  return (
    <div className="masterctn">
      <div className="header" style={headerStyle}>
        <NavBar activeLink={activeLink} handleNavLinkClick={handleNavLinkClick} />
      </div>

      <div className="content" style={{ minHeight: '60vh' }}>
        <Home id="home" />
        <AboutMe id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </div>
  );
}


