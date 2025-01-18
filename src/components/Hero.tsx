import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            Hey, This is Ujjwal Balaji! 👋
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm a 2024 graduate from SRM University, Sonepat, Delhi-NCR with a degree in Computer Science and Engineering (CSE), specializing in Artificial Intelligence and Data Science. I'm passionate about applying AI and data-driven techniques to solve real-world problems. Currently, I'm exploring opportunities in AI, NLP, and Machine Learning, while honing my skills through various full stack projects and contributions.
          </motion.p>
          <motion.a
            href="#experience"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Work Experience
          </motion.a>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          <motion.img
            src="Ujjwal.JPG"
            alt="Profile"
            className="rounded-lg w-85 h-85 object-cover shadow-lg"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;