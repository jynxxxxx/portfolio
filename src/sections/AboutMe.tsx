import { Code2, Coffee, Lightbulb, Target } from "lucide-react";
import '../style/aboutme.css'

export default function AboutMe({ id }: { id: string }) {

  return (
    <section id={id} className='py-16 bg-dark'>
      <div className="">
        <div className="mx-auto max-w-6xl">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-10 w-20 h-20 bg-bright3/10 rounded-full animate-float" />
            <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-bright1/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="text-gradient-primary">Me</span>
                </h2>
                <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                  <p>
                    My journey into software development wasn't traditional—I discovered coding through curiosity and stayed for the problem-solving. What started as tinkering with websites became a passion for building solutions that make a difference.
                  </p>
                  <p>
                    I thrive in ambiguous situations where the path isn't clear. Give me a complex bug, a new framework to learn, or a seemingly impossible feature request, and I'll dive in headfirst. My approach combines analytical thinking with creative experimentation.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, climbing, gaming, or eating.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover-lift">
                  <Lightbulb className="w-8 h-8 text-bright3 mb-3" />
                  <h3 className="font-semibold mb-2">Curious Learner</h3>
                  <p className="text-sm text-white/60">
                    Every project is an opportunity to explore new technologies and approaches.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover-lift">
                  <Target className="w-8 h-8 text-bright1 mb-3" />
                  <h3 className="font-semibold mb-2">Problem Solver</h3>
                  <p className="text-sm text-white/60">
                    I break down complex challenges into manageable, actionable steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Highlights */}
            <div className="space-y-8">
              {/* Journey Timeline */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-bright3" />
                  My Journey
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-bright3 rounded-full mt-2 glow" />
                    <div>
                      <h4 className="font-medium">Current Focus</h4>
                      <p className="text-sm text-white/60">
                        Building full-stack applications with React, Node.js, and cloud technologies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-bright1/60 rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium">Learning Phase</h4>
                      <p className="text-sm text-white/60">
                        Completed intensive bootcamp, built 20+ projects, mastered fundamental concepts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-white/40 rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium">Discovery</h4>
                      <p className="text-sm text-white/60">
                        From "Hello World", fell in love with the problem solving and creativity of programming
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-bright3" />
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center gap-3">
                    <span className="text-bright3">→</span>
                    Experience in sales, operations, planning, and development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-bright3">→</span>
                    Fluent in English, conversational in Korean
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-bright3">→</span>
                    Always excited to learn, be it coding or anything else
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-bright3">→</span>
                    Love to travel (27 countries so far!)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}