import { motion } from 'framer-motion';
import { ChevronDown, TrendingUp, Brain, Target } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#246EB9]/10 via-[#FAFAFA] to-[#FF8C42]/10 dark:from-[#246EB9]/20 dark:via-[#222831] dark:to-[#FF8C42]/20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#246EB9]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#FF8C42]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#FF8C42]/10 rounded-full text-[#FF8C42] font-medium mb-6"
            >
              Trading Mentor & Psychologie-Experte
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Melvin
              <span className="block text-[#246EB9] mt-2">Trading Mentor</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Jahrgang 96. Fokus auf Makro, Psychologie und nachhaltiges
              Trading. Bei mir geht es nicht nur um Strategien, sondern darum,
              wie du als Person dauerhaft stabil, klar und leistungsfähig am
              Markt und im Leben agieren kannst.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 bg-white dark:bg-[#222831] px-4 py-2 rounded-lg shadow-md">
                <TrendingUp className="h-5 w-5 text-[#246EB9]" />
                <span className="text-gray-700 dark:text-gray-300">
                  Trading
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-[#222831] px-4 py-2 rounded-lg shadow-md">
                <Brain className="h-5 w-5 text-[#FF8C42]" />
                <span className="text-gray-700 dark:text-gray-300">
                  Psychologie
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-[#222831] px-4 py-2 rounded-lg shadow-md">
                <Target className="h-5 w-5 text-[#246EB9]" />
                <span className="text-gray-700 dark:text-gray-300">
                  Mentoring
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-6 bg-[#246EB9]/10 dark:bg-[#246EB9]/20 rounded-xl border-l-4 border-[#246EB9]"
            >
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                Bitte beachten: Diese Präsentation ist strukturiert. Falls Sie
                Fragen haben, behalten Sie diese bitte bis zum Ende.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#246EB9] to-[#FF8C42] rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-[#246EB9]/20 to-[#FF8C42]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#246EB9]/30">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-[#246EB9] mb-4">
                    96
                  </div>
                  <div className="text-xl text-gray-700 dark:text-gray-300">
                    Jahrgang
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-[#246EB9] dark:hover:text-[#246EB9] transition-colors"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
