import { Link } from "react-router-dom";
import { ProjectDetailsList } from "../components/Projects";
import IconCarousel from "../components/IconCarousel";
import '../style/home.css'

export default function Home() {

  return (
    <>
      <div className="introctn">
        <h1 className="nameintro">JULIA KIM</h1>
        <div className="introsubtext">WEB DEVELOPER</div>
      </div>

      <div className="homeIntro">
        <h1 className="homeHi">Hi 👋, I'm Julia</h1>
        <div className="introblurb">A passionate full stack Korean American developer</div>



        <h3 className="langs">Languages and Tools:</h3>
        <IconCarousel />

        <div className="skillctn">
          <div className="skill">
            <div className="skilltitle">First-class Skills:</div>
            <div className="skilldescrip">I have honed my skills in front-end and back-end technologies, giving her a holistic understanding of the web development ecosystem. I am currently proficient in HTML5, CSS3, JavaScript, Typescript, React.js, Node.js, and more.</div>
          </div>

          <div className="skill">
            <div className="skilltitle">Self-Starter:</div>
            <div className="skilldescrip">I thrive in fast-paced, collaborative environments. My work ethic, problem-solving prowess, and willingness to embrace new challenges make me an great team player. I am also an avid learner and eager to learn about emerging web technologies.</div>
          </div>

          <div className="skill">
            <div className="skilltitle">Building the Future Together:</div>
            <div className="skilldescrip">I am now actively seeking my first coding job, eager to contribute my skills, creativity, and boundless enthusiasm to a forward-thinking team. I am ready to embrace challenges, learn from experts, and contribute my unique perspective to help your company succeed.</div>
          </div>

          <div className="learnmore">
            <Link
              to="aboutme"
              onClick={() => {
                window.scroll(0, 0);
              }}>
              Learn More About Me!
            </Link>
          </div>
        </div>


      </div>
      <div className="sneakpeek">
        <h2 className="projectstitle">Projects</h2>
        <ProjectDetailsList projectLimit={3} />
        <div className="seemore">
          <Link
            to="projects"
            onClick={() => {
              window.scroll(0, 0);
            }}>
            See More
          </Link>
        </div>
      </div>

    </>
  )
}
