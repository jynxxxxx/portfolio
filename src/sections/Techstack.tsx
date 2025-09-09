import { 
  Code2, 
  Cloud, 
  Globe, 
  Wrench,
} from "lucide-react";
import IconCarousel from "../components/IconCarousel";

const techCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      "Python", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS", "SCSS"
    ]
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: [
      "React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Django", "FastAPI", "Webpack"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS", "Docker", "Firebase", "Supabase", "Vercel", "MySQL"
    ]
  },
  {
    title: "Development",
    icon: Globe,
    skills: [
      "RESTful API design", "Third-party API integration", "Rapid prototyping", "Debugging", "Test automation"
    ]
  },
];

export default function TechStack({ id }: { id: string }) {
  return (
    <section id={id} className="py-20 px-6 bg-black relative">
      <div className="container mx-auto max-w-6xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--bright3))_1px,transparent_1px)] bg-[length:20px_20px] animate-tech-grid" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-regular md:text-xl text-white/40  max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life, from concept to deployment.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover-lift transition-smooth"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-bright3/20 rounded-lg border border-bright3/30">
                  <category.icon className="w-5 h-5 text-bright3" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 group"
                    style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                  >
                    <div className="w-2 h-2 bg-bright3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm text-white/40  group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='w-full overflow-x-hidden mt-16'>
          <IconCarousel />
        </div>

        {/* Featured Tech Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">
              Currently Learning & Exploring
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {["RAG", "LangChain", "AI Agents", "System Design", "GitHub Actions"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-blue/10 text-bright3 border border-bright3/30 rounded-full text-xs sm:text-sm font-medium hover:bg-gradient-blue/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-white/40  mt-4">
              Always excited to dive into new technologies and expand my toolkit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};