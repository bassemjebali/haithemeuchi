import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-soft-bg relative">
      {/* Call to Action Banner */}
      <div className="bg-accent-gold py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-8"
          >
            Besoin d’un conseil juridique fiable ?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="tel:+21625446100"
              className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-md font-medium transition-all hover:bg-primary-dark/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <a 
              href="https://wa.me/21625446100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md font-medium transition-all hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-accent-gold mb-2">Contact & Accès</h2>
            <h3 className="font-serif text-4xl mb-8 text-primary-dark font-bold">Trouvez notre cabinet</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-divider">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark text-lg mb-1">Adresse</h4>
                  <p className="text-gray-600 leading-relaxed">
                    5ème étage, Immeuble Sfax City, Bureau 33<br />
                    Rue Patrice Lumumba<br />
                    Sfax 3000, Tunisie
                  </p>
                  <p className="text-sm text-gray-500 mt-1 font-mono">PQJ7+H5 Sfax</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-divider">
                  <Phone className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark text-lg mb-1">Téléphone</h4>
                  <a href="tel:+21625446100" className="text-gray-600 hover:text-accent-gold transition-colors font-mono text-lg">
                    +216 25 446 100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-divider">
                  <Clock className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark text-lg mb-1">Horaires d'ouverture</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex justify-between w-48"><span>Lun – Ven:</span> <span className="font-medium">08:00 – 17:30</span></li>
                    <li className="flex justify-between w-48"><span>Samedi:</span> <span className="font-medium">10:00 – 14:00</span></li>
                    <li className="flex justify-between w-48 text-gray-400"><span>Dimanche:</span> <span>Fermé</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Facebook className="w-5 h-5 fill-current" />
                </div>
                <div className="pt-3">
                  <a href="https://www.facebook.com/share/1aABXGexFH/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary-dark hover:text-[#1877F2] transition-colors underline underline-offset-4">
                    Suivez-nous sur Facebook
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-divider relative"
          >
            {/* The Plus Code PQJ7+H5 Sfax maps to: 34.733611, 10.757778 approx. Using generic maps embed for Sfax City */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.898867568581!2d10.755490315220042!3d34.732959880426464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002cb71a4f02f3%3A0x6bba8c8942b0051e!2sRue%20Patrice%20Lumumba%2C%20Sfax!5e0!3m2!1sfr!2stn!4v1680000000000!5m2!1sfr!2stn" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Carte de localisation du cabinet"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
