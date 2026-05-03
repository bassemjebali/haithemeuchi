import { motion } from 'motion/react';
import { ShieldCheck, Clock, HeartHandshake, Settings, Lock } from 'lucide-react';

const REASONS = [
  { icon: ShieldCheck, title: 'Expertise reconnue', desc: 'Une maîtrise approfondie du droit doublée d\'une expérience multisectorielle.' },
  { icon: Clock, title: 'Réactivité', desc: 'Des réponses rapides et efficaces, car le temps est une composante essentielle de la réussite juridique.' },
  { icon: HeartHandshake, title: 'Approche humaine', desc: 'Une écoute active et un accompagnement personnalisé en toute confiance.' },
  { icon: Settings, title: 'Solutions sur mesure', desc: 'Chaque dossier est unique, nos stratégies juridiques le sont également.' },
  { icon: Lock, title: 'Sécurité juridique', desc: 'Garantir la pérennité de vos actions grâce à des bases légales solides et irréprochables.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary-dark text-white relative border-y border-accent-gold/20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#E6A520 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          
          <div className="lg:col-span-5 lg:pr-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-sans text-sm font-bold tracking-widest uppercase text-accent-gold mb-2"
            >
              Pourquoi Nous Choisir
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Votre succès est notre unique priorité.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              Notre cabinet s'engage à vous fournir une prestation juridique de la plus haute qualité. La confiance que nous accordent nos clients repose sur nos valeurs fondamentales et notre dévouement absolu.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
               <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-gold text-primary-dark px-6 py-3 rounded-md font-semibold transition-all hover:bg-accent-light hover:shadow-lg"
              >
                Discuter de votre dossier
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REASONS.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors ${index === REASONS.length - 1 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
                  >
                    <Icon className="w-8 h-8 text-accent-gold mb-4" />
                    <h4 className="font-serif text-xl font-bold mb-2">{reason.title}</h4>
                    <p className="text-gray-400 text-sm">{reason.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
