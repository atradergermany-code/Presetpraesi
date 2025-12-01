import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Target, Users, Zap } from 'lucide-react';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const visionPoints = [
    {
      icon: Target,
      title: 'Langfristiger Impact',
      description:
        'Nicht nur kurzfristige Erfolge, sondern nachhaltige Transformation',
    },
    {
      icon: Users,
      title: 'Ganzheitlicher Ansatz',
      description:
        'Märkte, Psychologie und persönliche Entwicklung als Einheit',
    },
    {
      icon: Zap,
      title: 'Maximaler Hebel',
      description:
        'Die größtmögliche positive Veränderung für jeden Einzelnen',
    },
  ];

  return (
    <section
      id="vision"
      ref={ref}
      className="min-h-screen py-20 bg-white dark:bg-[#222831] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#246EB9]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#FF8C42]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Meine Einschätzung über euch und eure Ziele
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#246EB9] via-[#FF8C42] to-[#246EB9] opacity-10" />
            <div className="relative p-12 md:p-16 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#246EB9] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Ich sehe hier mehr als ein Business
              </h3>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
                  Mir geht es darum, dass es nicht nur ein Mentoring ist,
                  sondern etwas, was langfristig einen Impact generieren wird.
                </p>
                <div className="inline-block px-8 py-4 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg">
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Hauptgedanke = simples Mentoringbusiness um Revenue zu
                    generieren?
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#246EB9] to-[#FF8C42] bg-clip-text text-transparent">
                    Das ist mir zu klein.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#246EB9]/20 to-[#FF8C42]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 bg-white dark:bg-[#2d3139] rounded-2xl shadow-xl h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-[#246EB9] to-[#FF8C42] rounded-xl flex items-center justify-center mb-6">
                  <point.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {point.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] rounded-2xl transform rotate-1" />
          <div className="relative bg-white dark:bg-[#2d3139] p-8 md:p-12 rounded-2xl shadow-2xl transform -rotate-1">
            <div className="transform rotate-1">
              <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                Was ich von dieser Zusammenarbeit erwarte
              </h3>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="p-6 bg-gradient-to-r from-[#246EB9]/10 to-transparent rounded-xl border-l-4 border-[#246EB9]">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-[#246EB9]">
                      Gemeinsame Vision:
                    </span>{' '}
                    Eine echte Partnerschaft, bei der es um mehr geht als nur
                    Profit
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-[#FF8C42]/10 to-transparent rounded-xl border-l-4 border-[#FF8C42]">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-[#FF8C42]">
                      Langfristiger Aufbau:
                    </span>{' '}
                    Nicht schnelle Lösungen, sondern nachhaltige Systeme und
                    echte Transformation
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-[#246EB9]/10 to-transparent rounded-xl border-l-4 border-[#246EB9]">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-[#246EB9]">
                      Gegenseitiges Wachstum:
                    </span>{' '}
                    Eine Zusammenarbeit, bei der beide Seiten lernen und sich
                    weiterentwickeln
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">
            Bereit für echten Impact?
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] rounded-full">
            <p className="text-white font-bold text-lg">
              Lasst uns darüber sprechen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
