// components/HeroIllustration.js
"use client";
import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Background Glow Effect */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 opacity-50 blur-3xl rounded-full"></div>

      {/* Floating Cards */}
      <div className="relative bg-[#1E293B] p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-[#6366F1]">Real-Time Analytics</h3>
        <p className="text-gray-400 mt-2">Track your business growth instantly.</p>
      </div>

      <motion.div
        initial={{ y: 20 }}
        animate={{ y: -10 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-16 right-[-30px] bg-[#1E293B] p-4 rounded-lg shadow-md"
      >
        📊 <span className="text-white">Data Insights</span>
      </motion.div>

      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-[-30px] left-[-30px] bg-[#1E293B] p-4 rounded-lg shadow-md"
      >
        ⚡ <span className="text-white">AI Automation</span>
      </motion.div>
    </motion.div>
  );
}
