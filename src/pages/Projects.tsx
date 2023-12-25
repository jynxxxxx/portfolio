import { ProjectDetailsList } from "../components/Projects";
import '../style/projects.css'

export default function Projects() {

  return (
    <>
      <div className="section">
        <div className="sectionTitle">PROJECTS</div>
        <div className="separate">_____</div>
      </div>
      <ProjectDetailsList />
    </>
  )
}