import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2
            }}
          >
            Hey, This is Ujjwal Balaji!
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a 2024 graduate from SRM University, Sonepat, Delhi-NCR with a degree in Computer Science and Engineering (CSE), specializing in Artificial Intelligence and Data Science. I'm passionate about applying AI and data-driven techniques to solve real-world problems. Currently, I'm exploring opportunities in AI, NLP, and Machine Learning, while honing my skills through various full stack projects and contributions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-x-4"
          >
            <motion.a
              href="#experience"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Work Experience
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-block bg-transparent border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3
          }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src="/Ujjwal.JPG"
              alt="Ujjwal Balaji"
              className="w-full h-auto object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70"></div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        onClick={scrollToNext}
      >
        <span className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-medium">Scroll to explore</span>
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-md rounded-full p-2 border border-gray-200 dark:border-gray-700"
          whileHover={{ y: 5, transition: { duration: 0.2 } }}
        >
          <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;