import { ProjectDetailsList } from "../components/Projects";

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
    <section id={id} className='bg-black py-12'>
      <div className="text-center my-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects that showcase my growth as a developer, from learning new frameworks to solving real-world problems.
        </p>
      </div>
      <div className='max-w-5xl mx-auto px-6 py-10 rounded-2xl sectionctn'>
        <ProjectDetailsList />
      </div>
    </section>
  )
}