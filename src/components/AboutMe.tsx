import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Briefcase,
      title: 'Beruflicher Hintergrund',
      description:
        'Hauptberuflich in der Industrie tätig, nebenberuflich in einer Traderbar',
    },
    {
      icon: Heart,
      title: 'Emotionale Intelligenz',
      description:
        'Fokus auf emotionale und psychologische Seite des Tradings',
    },
    {
      icon: Users,
      title: 'Mentoring-Ansatz',
      description:
        'Nicht nur Strategien - wie du als Person dauerhaft stabil am Markt agierst',
    },
  ];

  return (
    <section
      id="about"
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
            Wer ich heute bin
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#246EB9]/20 to-[#FF8C42]/20 rounded-2xl transform rotate-3" />
              <div className="relative bg-white dark:bg-[#222831] p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 bg-[#246EB9] rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">M</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Melvin
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Jahrgang 1996
                </p>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="flex items-start">
                    <span className="text-[#FF8C42] mr-2">•</span>
                    Trading Mentor mit Fokus auf Makro & Psychologie
                  </p>
                  <p className="flex items-start">
                    <span className="text-[#FF8C42] mr-2">•</span>
                    Hauptberuflich in der Industrie
                  </p>
                  <p className="flex items-start">
                    <span className="text-[#FF8C42] mr-2">•</span>
                    Nebenberuflich in einer Traderbar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Ein zentraler Teil meiner Arbeit ist die emotionale und
              psychologische Seite des Tradings:
            </p>

            <div className="space-y-4">
              <div className="pl-6 border-l-4 border-[#246EB9]">
                <p className="text-gray-700 dark:text-gray-300">
                  Wie triffst du Entscheidungen?
                </p>
              </div>
              <div className="pl-6 border-l-4 border-[#FF8C42]">
                <p className="text-gray-700 dark:text-gray-300">
                  Wie siehst du Trading, die Märkte, dein Umfeld, dich selbst?
                </p>
              </div>
              <div className="pl-6 border-l-4 border-[#246EB9]">
                <p className="text-gray-700 dark:text-gray-300">
                  Welche Muster sabotieren dich?
                </p>
              </div>
              <div className="pl-6 border-l-4 border-[#FF8C42]">
                <p className="text-gray-700 dark:text-gray-300">
                  Wie stabil ist dein emotionales Fundament?
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-[#246EB9]/10 to-[#FF8C42]/10 rounded-xl">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Genau an dieser Schnittstelle zwischen Märkten, Verstand und
                Emotionen bewege ich mich heute.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-[#246EB9] transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#246EB9] to-[#FF8C42] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
