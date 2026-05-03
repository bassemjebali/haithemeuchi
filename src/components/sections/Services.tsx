import { motion } from 'motion/react';
import { Briefcase, Lightbulb, FileText, ShieldAlert, Users, Globe } from 'lucide-react';

const SERVICES = [
  {
    icon: Briefcase,
    title: 'Droit des affaires',
    description: 'Sécurisez la croissance de votre entreprise avec un accompagnement juridique adapté à chaque étape de votre développement.',
  },
  {
    icon: Lightbulb,
    title: 'Conseil juridique stratégique',
    description: 'Anticipez les risques et prenez des décisions éclairées grâce à notre expertise en stratégie juridique.',
  },
  {
    icon: FileText,
    title: 'Rédaction de contrats',
    description: 'Protégez vos intérêts commerciaux grâce à des contrats solides, clairs et minutieusement rédigés pour éviter toute ambiguïté.',
  },
  {
    icon: ShieldAlert,
    title: 'Gestion des litiges',
    description: 'Défense combative et rigoureuse de vos droits devant les tribunaux pour résoudre vos conflits efficacement.',
  },
  {
    icon: Users,
    title: 'Droit de la famille',
    description: 'Un accompagnement humain, discret et respectueux pour toutes vos procédures familiales (divorce, garde, succession).',
  },
  {
    icon: Globe,
    title: 'Droit international',
    description: 'Bénéficiez d\'une expertise globale pour vos opérations transnationales et contentieux internationaux.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-soft-bg relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-sm font-bold tracking-widest uppercase text-accent-gold mb-2"
          >
            Nos Domaines d'Intervention
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6"
          >
            Des solutions juridiques sur mesure
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light"
          >
            Découvrez nos spécialités. Nous allions rigueur et stratégie pour vous offrir le meilleur accompagnement possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent-gold/30 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-soft-bg rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-dark transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent-gold" />
                </div>
                <h4 className="font-serif text-xl font-bold text-primary-dark mb-4 group-hover:text-accent-gold transition-colors">
                  {service.title}
                </h4>
                <p className="text-text-light leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                  <a href="#contact" className="text-sm font-semibold text-primary-dark flex items-center gap-1 group-hover:text-accent-gold transition-colors">
                    En savoir plus <span className="text-accent-gold group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
