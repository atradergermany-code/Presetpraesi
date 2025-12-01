import { motion } from 'framer-motion';
import { TrendingUp, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222831] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#246EB9] to-[#FF8C42] rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Melvin</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Trading Mentor mit Fokus auf Makro, Psychologie und nachhaltiges
              Trading. Deine Transformation ist mein Antrieb.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#246EB9]">
              Schnellzugriff
            </h3>
            <ul className="space-y-2">
              {[
                'Über mich',
                'Mein Weg',
                'Philosophie',
                'Stärken & Schwächen',
                'Transformationen',
                'Mein Warum',
                'Vision',
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                    className="text-gray-400 hover:text-[#FF8C42] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#246EB9]">Kontakt</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Bereit für eine Zusammenarbeit, die mehr ist als nur ein
                Mentoring?
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:melvin@example.com"
                  className="w-10 h-10 bg-[#2d3139] hover:bg-[#246EB9] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#2d3139] hover:bg-[#246EB9] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#2d3139] hover:bg-[#246EB9] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400">
            {currentYear} Melvin - Trading Mentor. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Gebaut mit Leidenschaft für echte Transformation
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
