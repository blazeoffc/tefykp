import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { 
  BarChart3, 
  TrendingUp, 
  Plus, 
  User,
  X,
  Wallet,
  Activity,
  Settings
} from 'lucide-react'

const Sidebar = ({ isOpen, onClose }) => {
  const navigation = [
    { name: 'Markets', href: '/', icon: BarChart3 },
    { name: 'Trading', href: '/trading', icon: TrendingUp },
    { name: 'Create Market', href: '/create', icon: Plus },
    { name: 'Profile', href: '/profile', icon: User },
  ]

  const stats = [
    { label: 'Total Volume', value: '$12.5M', change: '+12.5%' },
    { label: 'Active Markets', value: '1,247', change: '+8.2%' },
    { label: 'Active Traders', value: '8,456', change: '+15.3%' },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 left-0 z-50 w-80 lg:translate-x-0 lg:static lg:inset-0"
      >
        <div 
          className="h-full border-r border-white/15 relative overflow-hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Glassmorphism pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`
          }}></div>
          {/* Glassmorphism border effects */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex flex-col h-full">
          {/* Ultra-Clean Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 relative z-10">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center backdrop-blur-sm"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <Activity className="w-4 h-4 text-green-400" />
              </div>
              <h2 className="text-white text-lg font-semibold font-sans">Probabit</h2>
            </motion.div>
            <motion.button
              onClick={onClose}
              className="lg:hidden p-2.5 rounded-xl transition-all duration-200 backdrop-blur-sm"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(0, 0, 0, 0.3)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-4 h-4 text-slate-400" />
            </motion.button>
          </div>

          {/* Ultra-Sleek Navigation */}
          <nav className="flex-1 px-6 py-4 space-y-1 relative z-10">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={item.href}
                    onClick={() => {
                      // Only close sidebar on mobile devices
                      if (window.innerWidth < 1024) {
                        onClose()
                      }
                    }}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all duration-200 group relative ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`
                    }
                    style={({ isActive }) => ({
                      background: isActive 
                        ? 'rgba(16, 185, 129, 0.1)' 
                        : 'rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: isActive 
                        ? '1px solid rgba(16, 185, 129, 0.3)' 
                        : '1px solid rgba(255, 255, 255, 0.05)',
                      boxShadow: isActive 
                        ? '0 4px 16px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                        : '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    })}
                  >
                    <motion.div
                      className="p-1.5 rounded-lg backdrop-blur-sm"
                      style={({ isActive }) => ({
                        background: isActive 
                          ? 'rgba(16, 185, 129, 0.1)' 
                          : 'rgba(0, 0, 0, 0.2)',
                        border: isActive 
                          ? '1px solid rgba(16, 185, 129, 0.3)' 
                          : '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: isActive 
                          ? '0 2px 8px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                          : '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                      })}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: ({ isActive }) => isActive 
                          ? '0 4px 12px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                          : '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.div>
                    <span className="text-sm font-medium font-sans text-white">{item.name}</span>
                    {({ isActive }) => isActive && (
                      <motion.div
                        className="absolute right-3 w-1.5 h-1.5 rounded-full bg-green-400"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </NavLink>
                </motion.div>
              ))}
          </nav>

          {/* Ultra-Clean Stats Section */}
          <div className="px-6 py-4 border-t border-white/10 relative z-10">
            <motion.h3 
              className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-sans"
            >
              Platform Stats
            </motion.h3>
            <div className="space-y-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    background: 'rgba(0, 0, 0, 0.3)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div>
                    <p className="text-xs font-medium font-sans" style={{ color: '#666666' }}>{stat.label}</p>
                    <p className="text-sm font-semibold text-white font-sans">{stat.value}</p>
                  </div>
                  <motion.span 
                    className="text-xs font-bold px-2 py-1 rounded-lg backdrop-blur-sm"
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      boxShadow: '0 2px 8px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {stat.change}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ultra-Sleek User Section */}
          <div className="px-6 py-4 border-t border-white/10 relative z-10">
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-2xl transition-all duration-200 backdrop-blur-sm"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
              whileHover={{ 
                scale: 1.01,
                background: 'rgba(0, 0, 0, 0.3)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <motion.div 
                className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 6px 16px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <User className="w-5 h-5 text-green-400" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate font-sans">Anonymous User</p>
                <p className="text-xs font-mono font-sans" style={{ color: '#666666' }}>0x1234...5678</p>
              </div>
              <motion.button 
                className="p-2 rounded-xl transition-all duration-200 backdrop-blur-sm"
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  background: 'rgba(0, 0, 0, 0.3)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Settings className="w-4 h-4 text-slate-400" />
              </motion.button>
            </motion.div>
          </div>
        </div>
        </div>
      </motion.aside>
    </>
  )
}

export default Sidebar
