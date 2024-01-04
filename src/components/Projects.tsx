import boulder from "../assets/images/boulder.png"
import memory from "../assets/images/memory.png"
import battleship from "../assets/images/battleship.png"
import knight from "../assets/images/knight.png"
import findme from "../assets/images/findme.png"
import membersonly from "../assets/images/membersonly.png"
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
    title: "MembersOnly",
    descrip: "A message board that reveals details to members only",
    image: membersonly,
    gitLink: "https://github.com/jynxxxxx/membersOnly",
    liveLink: "https://membersonly-3l2u.onrender.com/",
    tools: ["Express", "EJS", "Mongoose", "Passport"],
  },
  {
    title: "FindMe",
    descrip: "A recreation of the classic 'Where's Waldo' game",
    image: findme,
    gitLink: "https://github.com/jynxxxxx/findme",
    liveLink: "https://jynxxxxx.github.io/findme/",
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
    title: "MemoryCard",
    descrip: "A Pokemon based memory game",
    image: memory,
    gitLink: "https://github.com/jynxxxxx/memorycard",
    liveLink: "https://jynxxxxx.github.io/memorycard/",
    tools: ["Javascript", "React", "Vite"],
  },
  {
    title: "Knight Travails",
    descrip: "A small app that calculates the minimum number of moves to get from point A to point B",
    image: knight,
    gitLink: "https://github.com/jynxxxxx/knight_travails",
    liveLink: "https://jynxxxxx.github.io/knight_travails/",
    tools: ["Javascript", "Webpack"],
  },

];

export function ProjectDetailsList({ slicestart = 0, projectLimit = projects.length }) {
  const limitedProjects = projects.slice(slicestart, projectLimit);

  return (
    <div className="projectrow">
      {limitedProjects.map((project, index) => (
        <div key={index} >
          <div className={`projectcard ${index}`}>
            <div className="screenshot">
              <div className="design"></div>
              <img
                className="projectimg"
                src={project.image}
                alt="website screenshot"
              />
              <div className="projectlinks">
                <a href={project.gitLink}> <VscGithubInverted className="link" /> </a>
                <a href={project.liveLink}> <VscLinkExternal className="link" /> </a>
              </div>
            </div>

            <div className="details">
              <div className="projecttitle">{project.title}</div>
              <div className="descrip">{project.descrip}</div>
              <div className="toolsctn">
                <div className="built"> Built using:</div>
                <div className="tools">
                  {project.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="tool">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}