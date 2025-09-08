import { Mail, ExternalLink, Send } from "lucide-react";
import { ReactComponent as GithubIcon } from '../assets/icons/git_logo_white.svg';
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg"
import '../style/contact.css'

export function Contact({ id }: { id: string }) {

  return (
    <section id={id} className='bg-dark py-16'>
      <div className="container mx-auto max-w-4xl">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-bright3/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-bright1/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto">
              Ready to collaborate, chat about code, or just say hello? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white/5 border border-white/10  rounded-3xl p-8 md:p-12 shadow-elevated max-w-2xl mx-auto">
            {/* Main CTA */}
            <div className="mb-8">
              <div className="inline-block p-4 bg-gradient-bright3/20 rounded-2xl mb-6 glow">
                <Mail className="w-8 h-8 text-bright3" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Ready to start a conversation?
              </h3>
              <p className="text-white/40 mb-6">
                Whether you have a project in mind, want to discuss opportunities, or just want to chat about the latest in tech, I'm always open to new connections.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <button
                className="w-full group"
              >
                <a href="mailto:jnykim97@gmail.com" className="flex justify-center items-center gap-2">
                  <Mail className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                  jnykim97@gmail.com
                  <Send className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
              </button>

              <button
                className="w-full group border-border/50 hover:border-bright3/50"
              >
                <a href="https://github.com/jynxxxxx" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2">
                  <GithubIcon className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                  github.com/jynxxxxx
                  <ExternalLink className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
              </button>

              <button
                className="w-full group border-border/50 hover:border-bright3/50"
              >
                <a href="https://www.linkedin.com/in/jnykim/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2">
                  <LinkedInIcon className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                  linkedin.com/in/jnykim/
                  <ExternalLink className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
              </button>
            </div>

            {/* Quick Response Note */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-bright3 rounded-full animate-glow-pulse" />
              <span>Usually responds within 24 hours</span>
            </div>
          </div>

          {/* Fun Footer Message */}
          <div className="mt-12">
            <p className="text-white/40 font-mono text-sm">
              <span className="text-bright3">// </span>
              Thanks for scrolling this far! 🚀
            </p>
          </div>
        </div>
      </div>
    </section >
  )
}
