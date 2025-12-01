import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Heart,
  Brain,
  Lightbulb,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

const StrengthsWeaknesses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const strengths = [
    {
      icon: Heart,
      title: 'Hohe Empathie',
      description:
        'Sehr gutes Verständnis für Emotionen, Gefühle, Denken, Beliefs und Spiritualität',
    },
    {
      icon: Brain,
      title: 'Mustererkennung',
      description:
        'Die Fähigkeit, Menschen und Muster schnell zu erfassen und zu verstehen',
    },
    {
      icon: Lightbulb,
      title: 'Kognitive Problemlösung',
      description: 'Kreativität bei komplexen Themen und unkonventionelles Denken',
    },
    {
      icon: TrendingUp,
      title: 'Makroökonomisches Verständnis',
      description:
        'Fundiertes Verständnis von Makroökonomie und deren Einfluss auf Trading',
    },
  ];

  const weaknesses = [
    {
      title: 'Struktur & Planung',
      description:
        'Vor allem durch ADHS sind Struktur und eigene Planung nicht selbstverständlich für mich.',
      solution:
        'Ich kann impulsiv handeln oder mich in Themen verlieren - daran arbeite ich aktiv.',
    },
    {
      title: 'Selbstdisziplin',
      description:
        'Für andere kann ich sehr klare und logische Schritte definieren.',
      solution:
        'Bei mir selbst habe ich gelernt, diese Strukturen aktiv zu bauen und immer wieder erneut anzugehen, statt auf "Selbstdisziplin" zu hoffen.',
    },
  ];

  return (
    <section
      id="strengths"
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-br from-[#FAFAFA] to-gray-100 dark:from-[#222831] dark:to-[#1a1d23]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Meine Stärken & Schwächen
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ehrlichkeit und Selbstreflexion sind die Grundlage für echtes
            Wachstum
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#246EB9] to-blue-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Stärken
              </h3>
            </div>

            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#246EB9]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#246EB9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <strength.icon className="h-5 w-5 text-[#246EB9]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {strength.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="p-6 bg-gradient-to-r from-[#246EB9]/10 to-[#FF8C42]/10 rounded-xl"
              >
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Diese Kombination erlaubt mir, nicht nur "Trades zu
                  analysieren", sondern den Menschen hinter den Entscheidungen
                  wirklich zu verstehen.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C42] to-orange-600 rounded-xl flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Schwächen & Umgang
              </h3>
            </div>

            <div className="space-y-6">
              {weaknesses.map((weakness, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#FF8C42]"
                >
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {weakness.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {weakness.description}
                  </p>
                  <div className="pl-4 border-l-2 border-[#246EB9]">
                    <p className="text-sm font-medium text-[#246EB9] mb-1">
                      Mein Umgang:
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {weakness.solution}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 bg-gradient-to-r from-[#FF8C42]/10 to-[#246EB9]/10 rounded-xl"
              >
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Wichtig zu verstehen:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Schwächen zu kennen bedeutet nicht, daran zu scheitern. Es
                  bedeutet, bewusst Systeme und Strukturen zu schaffen, die
                  diese ausgleichen und zu Stärken werden lassen.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsWeaknesses;
