import { ProjectDetailsList } from "../components/Projects";
import '../style/projects.css'

export default function Projects({ id }: { id: string }) {
  const rows = document.querySelectorAll('.projectrow');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('row-animation', entry.isIntersecting)
    });
  },
    {
      rootMargin: '10% 0%'
    })

  rows.forEach(row => {
    observer.observe(row)
  });

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