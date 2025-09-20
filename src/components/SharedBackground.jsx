import React from 'react'
import { motion } from 'framer-motion'

const SharedBackground = ({ children, className = "", style = {} }) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(45deg, rgba(0,0,0,0.95) 0%, rgba(15,23,42,0.98) 50%, rgba(0,0,0,0.95) 100%)',
        backdropFilter: 'blur(24px)',
        ...style
      }}
    >
      {/* Ultra-minimal background gradient */}
      <motion.div
        className="absolute inset-0 opacity-3"
        animate={{
          background: [
            'linear-gradient(45deg, transparent 0%, rgba(16, 185, 129, 0.02) 50%, transparent 100%)',
            'linear-gradient(45deg, transparent 0%, rgba(16, 185, 129, 0.01) 50%, transparent 100%)',
            'linear-gradient(45deg, transparent 0%, rgba(16, 185, 129, 0.02) 50%, transparent 100%)'
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default SharedBackground
