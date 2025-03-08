import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0D1321] text-white py-10">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* Logo / Branding */}
    <div className="text-white text-xl font-bold">NovaTech</div>
    
    {/* Navigation Links */}
    <nav className="flex gap-6 text-sm">
      <Link href="#home" className="hover:text-white transition">Home</Link>
      <Link href="#features" className="hover:text-white transition">Features</Link>
      <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
      <Link href="#about" className="hover:text-white transition">About</Link>
      <Link href="#contact" className="hover:text-white transition">Contact</Link>
    </nav>

    {/* Social Icons */}
    <div className="flex gap-4">
      <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-facebook"></i></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin"></i></a>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-sm text-gray-500 mt-6">
    © {new Date().getFullYear()} NovaTech. All rights reserved.
  </div>
</footer>

  )
}

export default Footer