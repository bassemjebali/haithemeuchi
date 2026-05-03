import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Scale } from 'lucide-react';

const EXPERTISE = [
  { icon: Briefcase, text: 'Droit des affaires' },
  { icon: Scale, text: 'Rédaction de contrats' },
  { icon: Scale, text: 'Droit de la famille' },
  { icon: Briefcase, text: 'Droit international' },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content - Typography & Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-accent-gold mb-2">À Propos du Cabinet</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-8 leading-tight">
                L'excellence juridique au service de vos intérêts.
              </h3>
              
              <div className="space-y-6 text-text-light text-lg">
                <p>
                 Plus de 20 ans d'expérience au service de vos intéréts.Je vous aide a prévenir les risques juridiques et a prendre les bonnes décissions.
                </p>
                <div className="pt-4 border-t border-divider">
                  <h4 className="flex items-center gap-2 text-primary-dark font-semibold mb-3">
                    <Award className="w-5 h-5 text-accent-gold" />
                    Expérience Solide
                  </h4>
                  <p className="text-base">
                    Une expertise forgée au sein d'institutions de premier plan, garantissant une maîtrise pointue et une vision globale des dossiers. Ayant exercé auprès de :
                  </p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-gray-700">
                    <li className="flex items-center gap-2 bg-soft-bg px-4 py-2 rounded-md">
                      <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                      Tunisiair
                    </li>
                    <li className="flex items-center gap-2 bg-soft-bg px-4 py-2 rounded-md">
                      <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                      Lloyd Assurances
                    </li>
                    <li className="flex items-center gap-2 bg-soft-bg px-4 py-2 rounded-md sm:col-span-2">
                      <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                      Municipalité de Sfax
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats / Education / Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary-dark text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl"
            >
              {/* Decorative graphic */}
              <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                <Scale className="w-64 h-64" />
              </div>

              <div className="relative z-10 space-y-12">
                <div>
                  <h4 className="flex items-center gap-3 text-2xl font-serif mb-6 text-accent-light">
                    <GraduationCap className="w-8 h-8" />
                    Formation
                  </h4>
                  <div className="pl-11 border-l-2 border-accent-gold/30 relative">
                    <div className="absolute w-4 h-4 bg-accent-gold rounded-full -left-[9px] top-1" />
                    <h5 className="font-semibold text-lg">Master en Droit des Affaires</h5>
                    <p className="text-gray-300 mt-1">Faculté de droit de Sfax</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-serif mb-6 text-accent-light">Domaines d'Expertise</h4>
                  <div className="grid border-t border-l border-white/10">
                    {EXPERTISE.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center gap-4 p-5 border-b border-r border-white/10 hover:bg-white/5 transition-colors">
                          <Icon className="w-6 h-6 text-accent-gold shrink-0" />
                          <span className="font-medium text-gray-200">{item.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
