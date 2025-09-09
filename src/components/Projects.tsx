import { ExternalLink, Code2 } from "lucide-react";
import { ReactComponent as GithubIcon } from '../assets/icons/git_logo_white.svg';

type ProjectDetails = {
  title: string;
  description: string;
  gitLink: string;
  liveLink: string;
  techStack: string[];
  hasDemo: boolean;
};

const projects: ProjectDetails[] = [
  {
    title: "RAG Chatbot",
    description: "An AI-powered document Q&A assistant using Retrieval-Augmented Generation to answer questions from uploaded files with citations.",
    gitLink: "https://github.com/jynxxxxx/ai_doc_q-a",
    liveLink: "",
    techStack: ["TypeScript", "Python", "FastAPI", "React", "Tailwind CSS", "Supabase", "Gemini AI", "ChromaDB"],
    hasDemo: false,
  },

  {
    title: "AI README Generator",
    description: "A tool that auto-generates professional README files for GitHub projects using AI, saving developers time.",
    gitLink: "https://github.com/jynxxxxx/READme_generator",
    liveLink: "",
    techStack: ["TypeScript", "FastAPI", "Docker", "Tailwind CSS", "React", "Gemini AI"],
    hasDemo: false,
  },

  {
    title: "Career Copilot",
    description: "An AI-driven 자기소개서 and career assistant that analyzes job postings, rewrites essays, and guides applicants with tailored feedback.",
    gitLink: "https://github.com/jynxxxxx/job_hunter",
    liveLink: "https://www.barojiwon.com/",
    techStack: ["Firebase", "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    hasDemo: true,
  },

  {
    title: "여성 대리운전",
    description: "A Korean service platform connecting women drivers with passengers who prefer female-designated drivers for safety and comfort.",
    gitLink: "https://github.com/jynxxxxx/luna_ride",
    liveLink: "https://www.ridemobl.com/",
    techStack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    hasDemo: true,
  },
  {
    title: "Gaming Credit Card Landing",
    description: "A sleek marketing site for a gamer-focused credit card, featuring perks, rewards, and community integration.",
    gitLink: "https://github.com/jynxxxxx/xp-card-landing-page",
    liveLink: "https://xp-card-landing-page.vercel.app/",
    techStack: ["Supabase", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    hasDemo: true,
  },
];

export function ProjectDetailsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={"bg-white/10 rounded-2xl p-6 hover-lift transition-smooth ring-1 ring-bright3/30 hover:ring-bright3/50 hover:shadow-lg shadow-white/30 shadow-md hover:ring-3"}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Project Header */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            {project.hasDemo ? (
              <a 
                className="flex items-center gap-1 text-xs text-bright3"
                href={project.liveLink}
                target="_blank" 
              rel="noopener noreferrer" 
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
            ) : (
              <a 
                className="flex items-center gap-1 text-xs text-white/40"
                href={project.gitLink}
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <Code2 className="w-3 h-3" />
                Code Only
              </a>
            )}
          </div>

          {/* Description */}
          <p className="mb-4 leading-relaxed text-white/50 text-sm">
            {project.description}
          </p>

          {/*tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 text-white/40 text-xs rounded-xl border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/*buttons*/}
          <div className="flex gap-3">
            <button
              className="bg-black flex group border-gray-900 hover:border-bright3/50 rounded-lg px-3 py-1"
            >
              <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm">
                <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                Code
              </a>
            </button>
            {project.liveLink && (
              <button
                className="flex group bg-bright3/10 hover:bg-bright3/20 text-bright3 border-bright3/30 rounded-lg px-3 py-1"
              >
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2  text-sm">
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  Demo
                </a>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}