// components/Navbar.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0D1321] text-white py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Nova<span className="text-[#6366F1]">Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/features" className="hover:text-[#6366F1] transition">Features</Link>
          <Link href="/pricing" className="hover:text-[#6366F1] transition">Pricing</Link>
          <Link href="/about" className="hover:text-[#6366F1] transition">About</Link>
          <Link href="/contact" className="hover:text-[#6366F1] transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 space-y-4 text-center"
        >
          <Link href="/features" className="block hover:text-[#6366F1] transition">Features</Link>
          <Link href="/pricing" className="block hover:text-[#6366F1] transition">Pricing</Link>
          <Link href="/about" className="block hover:text-[#6366F1] transition">About</Link>
          <Link href="/contact" className="block hover:text-[#6366F1] transition">Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
