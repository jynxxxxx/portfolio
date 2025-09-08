import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import { Contact } from "../sections/Contact";
import '../App.css'
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Hero from "../sections/Hero";

export default function Home() {
  const [activeLink, setActiveLink] = useState('hero');

  const handleNavLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const getActiveLinkFromScroll = () => {

    const getElementOffsetTop = (id: string): number => {
      const element = document.getElementById(id);
      return element ? element.offsetTop : 0;
    };

    const sectionOffsets = {
      hero: getElementOffsetTop('hero') - 100,
      about: getElementOffsetTop('about') - 100,
      projects: getElementOffsetTop('projects') - 100,
      contact: getElementOffsetTop('contact') - 100,
    };

    const scrollPosition = window.scrollY;

    let activeLink = 'hero';

    // Find the closest section based on scroll position
    for (const [link, offset] of Object.entries(sectionOffsets)) {
      if (scrollPosition >= offset) {
        activeLink = link;
      } else {
        break;
      }
    }

    return activeLink;
  };

  // Event listener for scrolling
  window.addEventListener('scroll', () => {
    getActiveLinkFromScroll();
  });

  const handleScroll = () => {
    const scrollActiveLink = getActiveLinkFromScroll();
    setActiveLink(scrollActiveLink);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);


  return (
    <div className="masterctn">
      <div className="header">
        <NavBar activeLink={activeLink} handleNavLinkClick={handleNavLinkClick} />
      </div>

      <div className="content">
        <Hero id="hero" />
        <AboutMe id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </div>
  );
}


