import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/21625446100"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-1 transition-all group flex items-center justify-center"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Discutons de votre dossier
        <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-white"></span>
      </span>
    </motion.a>
  );
}
