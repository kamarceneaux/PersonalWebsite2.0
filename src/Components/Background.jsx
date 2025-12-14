import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-green-50">
      {/* Large floating blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

      {/* Large floating blob 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

      {/* Large floating blob 3 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

      {/* Large floating blob 4 */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

      {/* Large floating blob 5 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/3 left-1/3 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

       {/* Small floating particle 1 */}
       <motion.div
        animate={{
          y: [0, -200],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
        className="absolute bottom-10 left-10 w-4 h-4 bg-green-400 rounded-full blur-sm"
      />

      {/* Small floating particle 2 */}
      <motion.div
        animate={{
          y: [0, -300],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
        className="absolute bottom-20 right-20 w-6 h-6 bg-green-500 rounded-full blur-sm"
      />
    </div>
  );
}
