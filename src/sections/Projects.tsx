import { ProjectDetailsList } from "../components/Projects";
import '../style/projects.css'

export default function Projects({ id }: { id: string }) {

  return (
    <section id={id} className='page'>
      <div className='sectionctn'>
        <div className="projectctn">
          <ProjectDetailsList slicestart={0} projectLimit={3} />
          <ProjectDetailsList slicestart={3} projectLimit={6} />
        </div>
      </div>
    </section>
  )
}