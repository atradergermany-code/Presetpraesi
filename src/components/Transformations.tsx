import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, TrendingUp, Heart, Sparkles } from 'lucide-react';

const Transformations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="transformations"
      ref={ref}
      className="min-h-screen py-20 bg-white dark:bg-[#222831]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Transformationen
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Echte Veränderung ist möglich - die Geschichten von Jan und Michael
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#246EB9]/20 to-[#FF8C42]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative bg-white dark:bg-[#2d3139] p-8 rounded-2xl shadow-xl">
              <div className="w-full h-64 bg-gradient-to-br from-[#246EB9]/10 to-[#246EB9]/30 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-6xl font-bold text-[#246EB9]/20">Jan</div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#246EB9] rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Jan
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm font-medium text-red-800 dark:text-red-300 mb-1">
                    Damals:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Massiv depressiv, verloren im Leben
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-800 dark:text-green-300 mb-1">
                    Heute:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Komplett verändert, neuer Lebensmut und Perspektive
                  </p>
                </div>
                <div className="p-4 bg-[#246EB9]/10 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Die Transformation von Jan zeigt, dass tiefgreifende
                    Veränderung möglich ist, wenn man bereit ist, an sich zu
                    arbeiten."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/20 to-[#246EB9]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative bg-white dark:bg-[#2d3139] p-8 rounded-2xl shadow-xl">
              <div className="w-full h-64 bg-gradient-to-br from-[#FF8C42]/10 to-[#FF8C42]/30 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-6xl font-bold text-[#FF8C42]/20">
                  Michael
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF8C42] rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Michael
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm font-medium text-red-800 dark:text-red-300 mb-1">
                    Damals:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Massiv depressiv, ohne Hoffnung
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-800 dark:text-green-300 mb-1">
                    Heute:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vollständig verändert, lebt ein erfülltes Leben
                  </p>
                </div>
                <div className="p-4 bg-[#FF8C42]/10 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Michaels Geschichte beweist, dass selbst aus den dunkelsten
                    Momenten Licht und Stärke entstehen können."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] opacity-10" />
          <div className="relative p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#246EB9] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Was diese Geschichten zeigen
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg">
                  <TrendingUp className="h-8 w-8 text-[#246EB9] mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Transformation ist real
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tiefgreifende Veränderung ist möglich
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg">
                  <Heart className="h-8 w-8 text-[#FF8C42] mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Emotionale Arbeit wirkt
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Psychologische Prozesse führen zu echten Ergebnissen
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg">
                  <Users className="h-8 w-8 text-[#246EB9] mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Du bist nicht allein
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Andere haben den Weg gemeistert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformations;
