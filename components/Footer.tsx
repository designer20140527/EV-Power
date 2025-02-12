import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-primary-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-12">
          {/* Logo and Name */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="EV Power Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
              EV Power
            </span>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.a
              href="https://x.com/EV_Power_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 relative group"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter"
                fill
                className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert-[0.4] group-hover:sepia-[0.1] group-hover:saturate-[20] group-hover:hue-rotate-[80deg]"
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
              className="w-6 h-6 relative group"
            >
              <Image
                src="/telegram.svg"
                alt="Telegram"
                fill
                className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert-[0.4] group-hover:sepia-[0.1] group-hover:saturate-[20] group-hover:hue-rotate-[80deg]"
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
              className="w-6 h-6 relative group"
            >
              <Image
                src="/dextools.svg"
                alt="Dextools"
                fill
                className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert-[0.4] group-hover:sepia-[0.1] group-hover:saturate-[20] group-hover:hue-rotate-[80deg]"
                style={{ 
                  filter: 'invert(83%) sepia(8%) saturate(248%) hue-rotate(182deg) brightness(87%) contrast(84%)'
                }}
              />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © 2025 EV Power. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 