import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Heart,
  Brain,
  TrendingDown,
  TrendingUp,
  Zap,
  Activity,
} from 'lucide-react';

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const journeySteps = [
    {
      icon: Brain,
      title: 'ADHS & Autismus',
      description:
        'Haben mein Erleben von Kindheit und Jugend stark geprägt. Im klassischen System fühlte ich mich oft "anders" und fehl am Platz.',
      color: '#246EB9',
    },
    {
      icon: Activity,
      title: 'Dopaminsuche',
      description:
        'Party, Drogen, Videospiele - zehntausende Stunden am PC. Auf der Suche nach Stimulation und Zugehörigkeit.',
      color: '#FF8C42',
    },
    {
      icon: Heart,
      title: 'Emotionale Wahrnehmung',
      description:
        'Ich nehme Emotionen, Spannungen und unausgesprochene Dynamiken bei anderen sehr fein wahr. Diese Gabe wurde zur Grundlage meiner Arbeit.',
      color: '#246EB9',
    },
    {
      icon: TrendingUp,
      title: 'Einstieg ins Trading',
      description:
        'Über Aktien und Krypto, getriggert durch Networking. Nach Ausstieg aus der Company selbst weitergemacht.',
      color: '#FF8C42',
    },
    {
      icon: TrendingDown,
      title: 'Der Tiefpunkt',
      description:
        'Overtrading, emotionales Handeln, zu große Risiken. Kompletter Tiefpunkt mit Einfluss auf Umfeld, Denken und Selbstbild.',
      color: '#FF8C42',
    },
    {
      icon: Zap,
      title: 'Die Wende',
      description:
        'Die beste Situation in meinem Leben: Der Punkt, an dem ich meine Persönlichkeit auf null setzen wollte. Der Wendepunkt zur Transformation.',
      color: '#246EB9',
    },
  ];

  return (
    <section
      id="journey"
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
            Mein Hintergrund & Entwicklung
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Von Schichtarbeiter bis zum bewusst gewählten Weg im Trading. Eine
            Reise der Transformation.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#246EB9] via-[#FF8C42] to-[#246EB9] hidden md:block" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:pr-8 md:pl-8">
                  <div
                    className={`p-6 rounded-xl shadow-lg bg-white dark:bg-[#2d3139] border-l-4 hover:shadow-2xl transition-all duration-300 ${
                      index % 2 === 0
                        ? 'md:text-right md:border-r-4 md:border-l-0'
                        : ''
                    }`}
                    style={{ borderColor: step.color }}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <step.icon
                          className="h-5 w-5"
                          style={{ color: step.color }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-16">
                  <div
                    className="w-4 h-4 rounded-full border-4 border-white dark:border-[#222831] relative z-10"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-[#246EB9]/10 via-[#FF8C42]/10 to-[#246EB9]/10 rounded-2xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Die Transformation
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Über die Jahre habe ich intensiv an mir selbst gearbeitet - an
              meinen Mustern, meiner Psyche und meinem Umgang mit Emotionen und
              meiner Wahrnehmung in Bezug auf Möglichkeiten. Heute steht für
              mich nicht das "schnelle Geld" im Mittelpunkt, sondern
              Stabilität, Professionalität und ein langfristig tragfähiger
              Ansatz.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
