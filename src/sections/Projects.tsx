import { ProjectDetailsList } from "../components/Projects";
import '../style/projects.css'

export default function Projects({ id }: { id: string }) {

  return (
    <section id={id}>
      <div className='sectionctn'>
        <div className="projectctn">
          <ProjectDetailsList slicestart={0} projectLimit={3} />
          <ProjectDetailsList slicestart={3} projectLimit={6} />
          <ProjectDetailsList slicestart={6} projectLimit={9} />
        </div>
      </div>
    </section>
  )
}