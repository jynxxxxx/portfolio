import boulder from "../assets/images/boulder.png"
import memory from "../assets/images/memory.png"
import battleship from "../assets/images/battleship.png"
import knight from "../assets/images/knight.png"
import findme from "../assets/images/findme.png"
import { VscGithubInverted, VscLinkExternal } from "react-icons/vsc"

type ProjectDetails = {
  title: string;
  descrip: string;
  image: string;
  gitLink: string;
  liveLink: string;
  tools: string[];
};

const projects: ProjectDetails[] = [
  {
    title: "BoulderBuddy",
    descrip: "A social media copycat for climbers to share their next climbing location",
    image: boulder,
    gitLink: "https://github.com/jynxxxxx/boulderbuddy",
    liveLink: "https://boulderbook.vercel.app/",
    tools: ["Typescript", "Next.js", "React", "TRPC"],
  },
  {
    title: "MemoryCard",
    descrip: "A Pokemon based memory game",
    image: memory,
    gitLink: "https://github.com/jynxxxxx/memorycard",
    liveLink: "https://jynxxxxx.github.io/memorycard/",
    tools: ["Javascript", "React", "Vite"],
  },
  {
    title: "BattleShip",
    descrip: "The classic Battleship game recreated for desktop, complete with CPU attack logic",
    image: battleship,
    gitLink: "https://github.com/jynxxxxx/battleship",
    liveLink: "https://jynxxxxx.github.io/battleship/",
    tools: ["Javascript", "Webpack", "Babel"],
  },
  {
    title: "Knight Travails",
    descrip: "A small app that calculates the minimum number of moves to get from point A to point B",
    image: knight,
    gitLink: "https://github.com/jynxxxxx/knight_travails",
    liveLink: "https://jynxxxxx.github.io/knight_travails/",
    tools: ["Javascript", "Webpack"],
  },
  {
    title: "FindMe",
    descrip: "A recreation of the classic 'Where's Waldo' game",
    image: findme,
    gitLink: "https://github.com/jynxxxxx/findme",
    liveLink: "https://jynxxxxx.github.io/findme/",
    tools: ["Javascript", "React", "Vite"],
  },
];

export function ProjectDetailsList({ projectLimit = projects.length }) {
  const limitedProjects = projects.slice(0, projectLimit);

  return (
    <div className="projectctn">
      {limitedProjects.map((project, index) => (
        <div key={index} {...project} >
          <div className={`projectcard ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="cardlabel">{project.title}</div>
            <div className="projectdescrip">
              <div className="maindescrip">{project.descrip}</div>
              <div className="tools"> Built using:
                <div className="toolsctn">
                  {project.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="tool">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="projectlinks">
                <a href={project.gitLink}> <VscGithubInverted className="link" /> </a>
                <a href={project.liveLink}> <VscLinkExternal className="link" /> </a>
              </div>
            </div>
            <div className="screenshot">
              <div className="design"></div>
              <img
                className="projectimg"
                src={project.image}
                alt="website screenshot"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}