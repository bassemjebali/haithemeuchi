import { motion } from 'motion/react';
import { ChevronRight, MessageSquare, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-soft-bg">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-light/10 blur-3xl rounded-full transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-gold/5 blur-3xl rounded-full transform -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-xs font-semibold uppercase tracking-wider text-primary-dark mb-6 border border-divider shadow-sm">
              <span className="flex items-center gap-1 text-accent-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </span>
              <span className="text-gray-600">5.0 (7 avis clients)</span>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-dark mb-6 leading-[1.1] tracking-tight">
              Votre avocat de confiance en <span className="text-accent-gold">Tunisie</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-text-light mb-8 max-w-lg leading-relaxed">
              Maître Amir Euchi, avocat à la Cour, Spécialiste en droit des affaires et contrats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-md font-medium transition-all hover:bg-primary-dark/90 hover:shadow-xl hover:shadow-primary-dark/20 hover:-translate-y-0.5"
              >
                Prendre rendez-vous
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/21625446100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark border border-divider px-8 py-4 rounded-md font-medium transition-all hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                Contacter sur WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md lg:max-w-lg mx-auto"
          >
            {/* Elegant Image masking/framing */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary-dark/10 mix-blend-multiply z-10" />
              <img 
                src="https://www.image2url.com/r2/default/images/1777838748006-c260a277-0cd6-4c4c-8c9e-b6792b82bc5a.jpg" 
                alt="Maître Amir Euchi - Avocat en Tunisie" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative outline */}
            <div className="absolute -inset-4 border border-accent-gold/40 rounded-[3rem] -z-10 hidden sm:block transform rotate-[-2deg]" />
            <div className="absolute -inset-4 border border-primary-dark/20 rounded-[3rem] -z-10 hidden sm:block transform rotate-[2deg]" />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
