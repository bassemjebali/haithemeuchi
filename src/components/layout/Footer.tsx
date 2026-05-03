import { Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-gray-300 pt-16 pb-8 border-t-4 border-accent-gold">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-white font-bold mb-4">
              Maître Amir Euchi
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Cabinet d'avocat spécialisé en droit des affaires et conseil juridique stratégique. Défense rigoureuse et accompagnement sur mesure.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1aABXGexFH/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors text-white"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><a href="#accueil" className="hover:text-accent-gold transition-colors block">Accueil</a></li>
              <li><a href="#a-propos" className="hover:text-accent-gold transition-colors block">À propos</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors block">Nos expertises</a></li>
              <li><a href="#avis" className="hover:text-accent-gold transition-colors block">Avis clients</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Droit des affaires</li>
              <li className="text-gray-400">Conseil stratégique</li>
              <li className="text-gray-400">Rédaction de contrats</li>
              <li className="text-gray-400">Gestion des litiges</li>
              <li className="text-gray-400">Droit de la famille</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <span className="text-sm">5ème étage, Immeuble Sfax City, Bureau 33, Rue Patrice Lumumba, Sfax 3000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                <a href="tel:+21625446100" className="text-sm hover:text-white transition-colors">+216 25 446 100</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Maître Amir Euchi. Tous droits réservés.
          </p>
          <div className="text-sm text-gray-500 flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Mentions légales</span>
            <span className="hover:text-white cursor-pointer transition-colors">Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
