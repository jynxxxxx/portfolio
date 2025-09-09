import waves from '../assets/images/waves.png'
import { Mail, ExternalLink } from "lucide-react";
import { ReactComponent as GithubIcon } from '../assets/icons/git_logo_white.svg';

export default function Hero({ id }: { id: string }) {

  return (
    <section id={id} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark">
      {/*background image */}
      <div 
        className="absolute inset-0 bg-cover bg-top-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${waves})` }}
      >
      </div>
      
      {/*animated shapes*/}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-blue rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-10 right-1/4 w-16 h-16 bg-bright1/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="z-10 w-fit px-6 ">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="rounded-full px-6 py-3 mb-8 animate-fade-in">
            <p className="text-bright3 font-mono text-sm">
              💻 Turning bugs into features (and coffee into code)
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="text-gradient-primary">Julia</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A junior software developer who thrives on learning by building. I came to software through an unconventional path, and I love navigating ambiguity, solving tough bugs, and creating things that actually work.
          </p>

          {/*buttons */}
          <div className="flex gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a 
              className="group flex items-center justify-center bg-gradient-primary font-semibold px-5 py-3 rounded-full shadow-lg w-full sm:w-auto"
              href="https://github.com/jynxxxxx"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <GithubIcon className="w-6 h-6 mr-2 group-hover:rotate-12" />
              <span className='group-hover:scale-[1.02] group-hover:text-gray-100'>View My Work</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-[1.02]" />
            </a>
            <button 
              className="group flex items-center justify-center border border-bright3/30 hover:border-bright3 hover:bg-bright3 hover:text-dark transition-colors font-semibold px-5 py-3 rounded-full shadow-lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="w-5 h-5 mr-2 transition-transform group-hover:scale-110 group-hover:text-dark" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/*scroll animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-bright3/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-bright3 rounded-full mt-2 animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
