import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Safa Euchi',
    text: "Un avocat compétent, humain et toujours disponible. Je recommande vivement Maître Amir pour son professionnalisme exceptionnel.",
  },
  {
    name: 'Slah Khadraoui',
    text: "Très satisfait pour votre travail. Un accompagnement de qualité et des conseils très pertinents pour notre entreprise.",
  },
  {
    name: 'Samiha Ferjani',
    text: "Merci Maître pour ton travail. La gestion du dossier a été impeccable du début à la fin. Une vraie tranquillité d'esprit.",
  }
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-sm font-bold tracking-widest uppercase text-accent-gold mb-2"
          >
            Avis Clients
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6"
          >
            Ils nous ont fait confiance
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-soft-bg p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent-gold/20" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto border-t border-divider pt-4">
                <p className="font-bold text-primary-dark font-serif">{testimonial.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Client(e)</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://www.facebook.com/share/1aABXGexFH/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-dark font-medium hover:text-accent-gold underline underline-offset-4 transition-colors"
          >
            Voir tous les avis sur Facebook
          </a>
        </motion.div>
      </div>
    </section>
  );
}
