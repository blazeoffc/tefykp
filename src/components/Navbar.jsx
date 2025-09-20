import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  Search, 
  Bell, 
  Settings, 
  Wallet,
  TrendingUp,
  Activity,
  Zap,
  Globe,
  ChevronDown
} from 'lucide-react'

const Navbar = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [notifications, setNotifications] = useState(3)

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-6 py-4 border-b border-white/10"
      style={{
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
        <div className="flex items-center justify-between">
          {/* Left Section - Ultra Clean */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-xl transition-all duration-200 hover:bg-white/5"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <Menu className="w-4 h-4 text-slate-400" />
            </button>
            
          </div>

          {/* Center Section - Ultra-Sleek Search with Live Stats */}
          <div className="hidden md:flex flex-1 max-w-4xl mx-6">
            <div className="flex items-center space-x-4 w-full">
              {/* Search Bar */}
              <motion.div 
                className="relative flex-1 group"
                whileFocus={{ scale: 1.005 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-green-400 transition-colors duration-200">
                  <Search className="w-4 h-4" />
                </div>
                <motion.input
                  type="text"
                  placeholder="Search markets, creators, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 rounded-2xl border-0 outline-none text-slate-100 placeholder-slate-500 text-sm font-medium transition-all duration-200"
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}
                  whileFocus={{
                    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                />
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-slate-700/50"
                    onClick={() => setSearchQuery('')}
                  >
                    <span className="text-slate-400 text-xs font-medium">×</span>
                  </motion.button>
                )}
              </motion.div>

              {/* Live Stats - Ultra-Clean */}
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-slate-200 text-sm font-semibold">$12.5M</span>
                  <span className="text-slate-500 text-xs">24h</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                  whileHover={{ scale: 1.02 }}
                >
                  <TrendingUp className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-200 text-sm font-semibold">1,247</span>
                  <span className="text-slate-500 text-xs">Markets</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Section - Ultra-Sleek Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications - Ultra-Clean */}
            <motion.button 
              className="relative p-2.5 rounded-xl transition-all duration-200 hover:bg-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-4 h-4 text-slate-400" />
              {notifications > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                    boxShadow: '0 0 8px rgba(239, 68, 68, 0.4)'
                  }}
                >
                  {notifications}
                </motion.span>
              )}
            </motion.button>

            {/* Wallet - Ultra-Sleek Design */}
            <motion.button 
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                color: 'white'
              }}
              whileHover={{ 
                scale: 1.02,
                background: 'rgba(16, 185, 129, 0.12)',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Wallet className="w-4 h-4" />
              <span className="hidden sm:block text-slate-200 text-sm">0x1234...5678</span>
            </motion.button>
          </div>
        </div>
    </motion.nav>
  )
}

export default Navbar