
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="w-32 h-32 mb-4 dark:invert-[.15]"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 1,
              repeat: Infinity,
            }
          }}
        />
        <motion.p
          className="text-xl font-semibold text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Made with React 
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;