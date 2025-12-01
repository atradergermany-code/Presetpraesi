import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Target, TrendingUp, Shield } from 'lucide-react';

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="why"
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
            Mein Warum
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Warum ich tue, was ich tue
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] opacity-10" />
            <div className="relative p-12 md:p-16">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#246EB9] to-[#FF8C42] rounded-full flex items-center justify-center">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed text-center mb-8">
                  Ich weiß aus eigener Erfahrung, wie hart Trading sein kann -
                  emotional, mental und finanziell.
                </p>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  Viele dieser Schmerzen sind vermeidbar, wenn jemand da ist,
                  der sowohl Strategie als auch innere Prozesse versteht.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-white dark:bg-[#2d3139] rounded-2xl shadow-xl"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#246EB9] to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Mein Ziel
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Meine Energie langfristig vollständig in die Arbeit im Trading-
              und Mentoringbereich zu investieren und dort den größten Hebel
              für andere zu schaffen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 bg-white dark:bg-[#2d3139] rounded-2xl shadow-xl"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#FF8C42] to-orange-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Was mich antreibt
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Die Überzeugung, dass echte Transformation möglich ist. Die
              Erfahrung, selbst den Weg aus der Dunkelheit gefunden zu haben.
              Der Wunsch, anderen diesen Weg zu erleichtern.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#246EB9]/10 to-[#FF8C42]/10 rounded-2xl transform -rotate-1" />
          <div className="relative bg-white dark:bg-[#2d3139] p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#246EB9] to-[#FF8C42] rounded-xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Voraussetzung für maximalen Hebel
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
                Mir geht es darum, dass es nicht nur ein Mentoring ist, sondern
                etwas, was langfristig einen Impact generieren wird.
              </p>
              <div className="p-6 bg-gradient-to-r from-[#246EB9]/10 to-[#FF8C42]/10 rounded-xl border-l-4 border-[#246EB9]">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Hauptgedanke = simples Mentoringbusiness um Revenue zu
                  generieren?
                </p>
                <p className="text-2xl font-bold text-[#FF8C42]">
                  Das ist mir zu klein.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
