import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import { Contact } from "../sections/Contact";
import '../App.css'
import NavBar from "../components/NavBar";
import { useEffect, useState, useRef } from "react";
import Hero from "../sections/Hero";
import TechStack from "../sections/Techstack";

export default function Home() {
  const [activeLink, setActiveLink] = useState('hero');
  const clickRef = useRef(true);

  const sections = [
    { id: 'hero', link: 'hero' },
    { id: 'projects', link: 'projects' },
    { id: 'about', link: 'about' },
    { id: 'techstack', link: 'techstack' },
    { id: 'contact', link: 'contact' },
  ];

  const handleNavLinkClick = (e:any, link: string) => {
    e.preventDefault();          
    clickRef.current = true;
    setActiveLink(link);

    const el = document.getElementById(link);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll manually
    }

    setTimeout(() => clickRef.current=false, 700);
  };

  const getActiveLinkFromScroll = () => {
    const scrollPosition = window.scrollY + 120; // 120 = threshold / navbar height
    let activeLink = 'hero';

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el && scrollPosition >= el.offsetTop) {
        activeLink = section.link;
      } else {
        break;
      }
    }

    return activeLink;
  };

  const handleScroll = () => {
    if (clickRef.current) return;

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
      <NavBar activeLink={activeLink} handleNavLinkClick={handleNavLinkClick} />

      <div className="content">
        <Hero id="hero" />
        <Projects id="projects" />
        <AboutMe id="about" />
        <TechStack id="techstack" />
        <Contact id="contact" />
      </div>
    </div>
  );
}


