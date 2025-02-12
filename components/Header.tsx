"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
  const menuItems = [
    { name: 'Home', section: 'hero' },
    { name: 'Features', section: 'core-features' },
    { name: 'Mining', section: 'mining' },
    { name: 'Token', section: 'token' },
    { name: 'FAQ', section: 'faq' }
  ]
  
  const handleScroll = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-40 h-12 cursor-pointer"
            onClick={() => handleScroll('hero')}
          >
            <Image
              src="/logo.png"
              alt="EV Power Logo"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleScroll(item.section)}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://x.com/EV_Power_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 h-5 relative group"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
                className="text-gray-400 transition-colors duration-300 filter group-hover:brightness-0 group-hover:invert-[0.4] group-hover:sepia-[0.1] group-hover:saturate-[20] group-hover:hue-rotate-[80deg]"
                style={{ 
                  filter: 'invert(83%) sepia(8%) saturate(248%) hue-rotate(182deg) brightness(87%) contrast(84%)'
                }}
              />
            </motion.a>
            <motion.a
              href="https://t.me/EV_Power_Portal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 h-5 relative group"
            >
              <Image
                src="/telegram.svg"
                alt="Telegram"
                width={20}
                height={20}
                className="text-gray-400 transition-colors duration-300 filter group-hover:brightness-0 group-hover:invert-[0.4] group-hover:sepia-[0.1] group-hover:saturate-[20] group-hover:hue-rotate-[80deg]"
                style={{ 
                  filter: 'invert(83%) sepia(8%) saturate(248%) hue-rotate(182deg) brightness(87%) contrast(84%)'
                }}
              />
            </motion.a>
            <motion.a
              href="https://www.dextools.io"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 h-5 relative group"
            >
              <Image
                src="/dextools.svg"
                alt="Dextools"
                width={20}
                height={20}
                className="text-gray-400 transition-colors duration-300 filter group-hover:brightness-0 group-hover:invert-[0.4] group-hover:sepia-[0.1] group-hover:saturate-[20] group-hover:hue-rotate-[80deg]"
                style={{ 
                  filter: 'invert(83%) sepia(8%) saturate(248%) hue-rotate(182deg) brightness(87%) contrast(84%)'
                }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 