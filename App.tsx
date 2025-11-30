import React from 'react';
import { Palette, Gamepad2, Bike, MonitorPlay, Leaf } from 'lucide-react';

// Components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import Contact from './components/Contact';
import { StarIcon } from './components/Decoration';

// Data
import { EXPERIENCES, EDUCATION, SKILLS, PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-vintage-purple selection:text-white pb-12">
      
      {/* --- HEADER --- */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-4">
        <div className="relative border-b-2 border-ink pb-2 flex justify-between items-end">
           {/* Decorative elements behind title */}
           <div className="absolute top-0 left-10 -z-10 opacity-20">
              <Leaf size={100} className="text-vintage-green rotate-12" />
           </div>

           <div>
              <p className="font-sans text-sm font-bold mb-1 tracking-widest">PORTFOLIO</p>
              <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter uppercase relative z-10">
                PORTFOLIO
              </h1>
           </div>

           <div className="text-right hidden md:block">
              <p className="font-serif italic text-lg">Année 2024</p>
              <p className="font-bold text-xs uppercase tracking-widest mt-1">Directrice Artistique</p>
           </div>
        </div>
      </header>

      {/* --- NAV --- */}
      <div className="max-w-6xl mx-auto px-6">
        <NavBar />
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-6xl mx-auto px-6">
        
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT COLUMN (Experiences & Projects) --- */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* EXPERIENCES */}
            <section>
              <SectionHeader title="EXPERIENCES" />
              <div className="space-y-8 pl-2 border-l-2 border-ink/10 ml-2">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative pl-6 group">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-ink bg-white group-hover:bg-vintage-purple transition-colors"></div>
                    <p className="text-sm font-bold text-gray-500 mb-1">{exp.period}</p>
                    <h3 className="text-xl font-black uppercase font-sans leading-none mb-1">{exp.role}</h3>
                    <p className="text-md font-serif italic mb-2 text-vintage-purple font-bold">{exp.company}</p>
                    {exp.description && <p className="text-sm leading-relaxed max-w-md opacity-80">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS / GALLERY */}
            <section>
              <div className="flex justify-between items-end mb-6">
                 <h2 className="text-4xl font-serif font-bold">.04</h2>
                 <SectionHeader title="PSY APO" />
              </div>
              
              <div className="bg-white border-2 border-ink p-4 rounded-xl shadow-vintage">
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {PROJECTS.map((project) => (
                      <div key={project.id} className="aspect-square border-2 border-ink rounded-lg overflow-hidden relative group cursor-pointer hover:-translate-y-1 transition-transform">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                           <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-xs uppercase bg-black/80 px-2 py-1 rounded-full">
                             {project.category}
                           </span>
                        </div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed mb-4">
                        With Maxime Baron, our project visually illustrates psycho-organic therapy through Alex's difficult journey. The story explores his initial suffering, his meeting with the therapist, and the transformation.
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="border border-ink px-3 py-1 text-xs font-bold rounded-full bg-cream">ANIMATION TRADITIONNELLE</span>
                        <span className="border border-ink px-3 py-1 text-xs font-bold rounded-full bg-cream">MOTION DESIGN</span>
                      </div>
                    </div>
                 </div>
              </div>
            </section>

          </div>

          {/* --- RIGHT COLUMN (Education, Skills, Hobbies, Contact) --- */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* EDUCATION */}
            <section>
              <SectionHeader title="FORMATIONS" />
              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="bg-white border-2 border-ink p-4 rounded-xl shadow-vintage-sm hover:shadow-vintage transition-shadow">
                    <p className="text-xs font-bold text-gray-500">{edu.period}</p>
                    <h4 className="font-serif font-bold text-lg leading-tight my-1">{edu.school}</h4>
                    <p className="text-sm">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS / APTITUDES */}
            <section>
              <SectionHeader title="APTITUDES" />
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="border-2 border-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase hover:bg-ink hover:text-white transition-colors cursor-default bg-white"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

             {/* HOBBIES */}
             <section>
              <SectionHeader title="HOBBIES" />
              <div className="grid grid-cols-3 gap-4">
                 <div className="aspect-square bg-white border-2 border-ink rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <Palette className="w-8 h-8 mb-1 text-vintage-orange" />
                    <span className="text-[10px] font-bold uppercase">Graff</span>
                 </div>
                 <div className="aspect-square bg-white border-2 border-ink rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <Gamepad2 className="w-8 h-8 mb-1 text-vintage-purple" />
                    <span className="text-[10px] font-bold uppercase">Fantasy</span>
                 </div>
                 <div className="aspect-square bg-white border-2 border-ink rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <Bike className="w-8 h-8 mb-1 text-vintage-green" />
                    <span className="text-[10px] font-bold uppercase">Skate</span>
                 </div>
              </div>
            </section>

            {/* CONTACT */}
            <Contact />

          </div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t-2 border-ink flex justify-between items-center text-xs font-bold text-ink/50 uppercase">
        <span>© {new Date().getFullYear()} Angèle Bappel</span>
        <span>Designed with ❤️ & React</span>
      </footer>

    </div>
  );
};

export default App;