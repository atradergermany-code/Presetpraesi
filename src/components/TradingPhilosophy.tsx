import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TradingPhilosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const beliefs = [
    {
      icon: Shield,
      title: 'Verantwortung statt Ausreden',
      description:
        'Märkte, News oder andere Menschen sind keine Ausflucht. Du trägst die volle Verantwortung für deine Entscheidungen.',
      gradient: 'from-[#246EB9] to-blue-600',
    },
    {
      icon: Target,
      title: 'Emotionale Arbeit ist Pflicht',
      description:
        'Ohne emotionale und psychologische Arbeit bleibt Performance Zufall. Dies ist kein "Nice to have", sondern die Grundlage.',
      gradient: 'from-[#FF8C42] to-orange-600',
    },
    {
      icon: Users,
      title: 'System passt zur Person',
      description:
        'Das Trading-System muss zu dir passen, nicht umgekehrt. Persönlichkeit, Alltag und Nervensystem sind genauso wichtig wie der Chart.',
      gradient: 'from-[#246EB9] to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Langfristige Stabilität',
      description:
        'Nicht das schnelle Geld, sondern Stabilität, Professionalität und ein langfristig tragfähiger Ansatz stehen im Mittelpunkt.',
      gradient: 'from-[#FF8C42] to-orange-600',
    },
  ];

  return (
    <section
      id="philosophy"
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
            Meine Überzeugungen im Trading & Mentoring
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Meine Arbeit wird von klaren Überzeugungen getragen, die den
            Unterschied zwischen kurzfristigem Glück und langfristigem Erfolg
            ausmachen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-transparent hover:border-[#246EB9] transition-all duration-300 hover:shadow-2xl group">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${belief.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <belief.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {belief.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {belief.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#246EB9] to-[#FF8C42] opacity-10" />
          <div className="relative p-12 text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Der Kern meines Ansatzes
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Es geht nicht nur darum, "Trades zu analysieren", sondern den
                Menschen hinter den Entscheidungen wirklich zu verstehen.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-[#246EB9] mb-2">
                    01
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Verstehe deine Psyche
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-[#FF8C42] mb-2">
                    02
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Baue emotionale Stabilität
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-[#2d3139] rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-[#246EB9] mb-2">
                    03
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Entwickle nachhaltiges Trading
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

export default TradingPhilosophy;
