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
    <section className="relative min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 sm:pt-20">
      <div className="max-w-6xl w-full mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
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
            I'm a 2024 Computer Science Undergrad from SRM University, Sonepat, Delhi-NCR, specializing in AI & Data Science. Currently working at Genpact as a Lead Associate – EUC, and passionately learning AI, NLP, and ML, while building full stack projects to sharpen my skills. I enjoy reading and writing tech blogs and stay driven by a constant curiosity for all things tech.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full"
          >
            <motion.a
              href="#experience"
              className="flex-1 text-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Work Experience
            </motion.a>
            <motion.a
              href="#projects"
              className="flex-1 text-center bg-transparent border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
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
      
      {/* Scroll down indicator - centered for all devices */}
      <motion.div 
        className="flex flex-col items-center cursor-pointer z-10 mb-8 mt-auto"
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