import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Users, 
  Activity,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Calendar,
  DollarSign
} from 'lucide-react'
import { 
  IconSearch,
  IconFilter,
  IconTrendingUp,
  IconTrendingDown,
  IconClock,
  IconUsers,
  IconActivity,
  IconStar,
  IconArrowUpRight,
  IconArrowDownRight,
  IconChartBar,
  IconCalendar,
  IconCurrencyDollar,
  IconSparkles,
  IconRefresh,
  IconEye,
  IconHeart,
  IconCheck,
  IconX
} from '@tabler/icons-react'

const Markets = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('volume')

  const categories = ['All', 'Crypto', 'Politics', 'Sports', 'Business', 'Entertainment', 'Tech', 'Science']

  const markets = [
    {
      id: 1,
      title: 'Will ETH hit $5000 by year-end?',
      category: 'Crypto',
      volume: '$2.4M',
      participants: 1247,
      yesPrice: 0.68,
      noPrice: 0.32,
      change: '+12.5%',
      timeLeft: '45 days',
      creator: 'CryptoWhale',
      verified: true,
      trending: true,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Will Tesla stock hit $300 in Q2?',
      category: 'Business',
      volume: '$1.8M',
      participants: 892,
      yesPrice: 0.45,
      noPrice: 0.55,
      change: '-5.2%',
      timeLeft: '23 days',
      creator: 'StockGuru',
      verified: true,
      trending: false,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Will Messi score in next World Cup?',
      category: 'Sports',
      volume: '$3.1M',
      participants: 2156,
      yesPrice: 0.72,
      noPrice: 0.28,
      change: '+18.3%',
      timeLeft: '67 days',
      creator: 'SportsAnalyst',
      verified: true,
      trending: true,
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Will Taylor Swift announce new album?',
      category: 'Entertainment',
      volume: '$956K',
      participants: 543,
      yesPrice: 0.82,
      noPrice: 0.18,
      change: '+25.7%',
      timeLeft: '12 days',
      creator: 'MusicFan',
      verified: false,
      trending: true,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'Will Bitcoin reach $100K by 2024?',
      category: 'Crypto',
      volume: '$1.2M',
      participants: 678,
      yesPrice: 0.35,
      noPrice: 0.65,
      change: '-8.1%',
      timeLeft: '89 days',
      creator: 'BitcoinMaxi',
      verified: true,
      trending: false,
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 6,
      title: 'Will OpenAI release GPT-5 in 2024?',
      category: 'Tech',
      volume: '$789K',
      participants: 432,
      yesPrice: 0.58,
      noPrice: 0.42,
      change: '+3.2%',
      timeLeft: '156 days',
      creator: 'TechInsider',
      verified: true,
      trending: false,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center'
    }
  ]

  const filteredMarkets = markets.filter(market => {
    const matchesSearch = market.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         market.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || market.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category) => {
    const colors = {
      'Crypto': 'from-yellow-500/20 to-orange-500/20 text-yellow-400',
      'Politics': 'from-blue-500/20 to-indigo-500/20 text-blue-400',
      'Sports': 'from-green-500/20 to-emerald-500/20 text-green-400',
      'Business': 'from-purple-500/20 to-violet-500/20 text-purple-400',
      'Entertainment': 'from-pink-500/20 to-rose-500/20 text-pink-400',
      'Tech': 'from-cyan-500/20 to-blue-500/20 text-cyan-400',
      'Science': 'from-teal-500/20 to-cyan-500/20 text-teal-400'
    }
    return colors[category] || 'from-slate-500/20 to-slate-600/20 text-slate-400'
  }

  return (
    <div 
      className="min-h-screen p-6 space-y-8 relative overflow-hidden"
      style={{
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Glassmorphism Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
        }}
      />
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl p-8"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Glassmorphism Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
            }}
          />
          
          {/* Border Effects */}
          <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-2xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-white text-3xl font-bold mb-2 font-sans">Prediction Markets</h1>
              <p className="font-sans" style={{ color: '#666666' }}>Discover and trade on the world's most interesting questions</p>
            </div>
            <div className="mt-4 lg:mt-0 flex space-x-2">
              <button className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-6 py-3 flex items-center space-x-2 text-white font-sans hover:bg-white/10 transition-all duration-300">
                <IconFilter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-sans rounded-xl px-6 py-3 flex items-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25">
                <IconSparkles className="w-4 h-4" />
                <span>Create Market</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl p-6 mt-8"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Glassmorphism Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
            }}
          />
          
          {/* Border Effects */}
          <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-2xl"></div>
          
          <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="flex-1 relative">
              <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search markets, creators, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 text-white text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/50 transition-all duration-300 rounded-2xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 font-sans ${
                    selectedCategory === category
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={selectedCategory === category ? {
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)'
                  } : {
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: selectedCategory === category 
                      ? '0 12px 40px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                      : '0 8px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-4 text-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/50 transition-all duration-300 rounded-2xl"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <option value="volume" className="bg-black text-white">Sort by Volume</option>
              <option value="participants" className="bg-black text-white">Sort by Participants</option>
              <option value="timeLeft" className="bg-black text-white">Sort by Time Left</option>
              <option value="change" className="bg-black text-white">Sort by Change</option>
            </select>
          </div>
          </div>
        </motion.div>

        {/* Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 mb-16"
        >
          {[
            { label: 'Total Markets', value: markets.length },
            { label: 'Total Volume', value: '$12.5M' },
            { label: 'Active Traders', value: '8,456' },
            { label: 'Avg Accuracy', value: '73.2%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6 text-center rounded-xl"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 12px 40px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="text-display-sm text-white mb-2 font-sans">{stat.value}</div>
              <div className="text-body-sm font-sans" style={{ color: '#666666' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8 mt-12">
          {filteredMarkets.map((market, index) => (
            <motion.div
              key={market.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 + index * 0.05,
                duration: 0.3,
                ease: "easeOut"
              }}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                boxShadow: '0 16px 40px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Market Header */}
              <div className="relative h-40 bg-gradient-to-br from-slate-900/80 via-black/60 to-slate-900/80 backdrop-blur-xl overflow-hidden">
                {/* Static background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/5 to-purple-500/10" />
                
                {/* Enhanced glassmorphism pattern overlay */}
                <div className="absolute inset-0 opacity-40" style={{
                  backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), 
                                  radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
                                  linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.08) 50%, transparent 70%),
                                  linear-gradient(45deg, transparent 0%, rgba(16, 185, 129, 0.05) 25%, transparent 50%, rgba(59, 130, 246, 0.05) 75%, transparent 100%)`
                }}></div>
                
                {/* Premium border effects */}
                <div className="absolute inset-0 rounded-t-2xl border border-white/30"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <motion.span 
                    className="px-4 py-2 text-xs font-bold rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.05) 100%)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)'
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 100%)',
                      boxShadow: '0 12px 40px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      border: '1px solid rgba(16, 185, 129, 0.4)'
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {market.category}
                  </motion.span>
                  {market.trending && (
                    <motion.span 
                      className="px-4 py-2 text-xs font-bold rounded-2xl flex items-center space-x-1.5"
                      style={{
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.05) 100%)',
                        color: '#ef4444',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        boxShadow: '0 8px 32px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)'
                      }}
                      whileHover={{ 
                        scale: 1.08,
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.1) 100%)',
                        boxShadow: '0 12px 40px rgba(239, 68, 68, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(239, 68, 68, 0.4)'
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <IconStar className="w-3.5 h-3.5" />
                      <span className="font-sans">Trending</span>
                    </motion.span>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button 
                    className="p-2 rounded-xl backdrop-blur-xl border border-white/20 transition-all duration-300"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      background: 'rgba(0, 0, 0, 0.4)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <IconEye className="w-4 h-4 text-white/80" />
                  </motion.button>
                  <motion.button 
                    className="p-2 rounded-xl backdrop-blur-xl border border-white/20 transition-all duration-300"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      background: 'rgba(239, 68, 68, 0.2)',
                      boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <IconHeart className="w-4 h-4 text-white/80" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.h4 
                    className="text-lg font-bold text-white line-clamp-2 group-hover:text-green-300 transition-colors duration-200 font-sans"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  >
                    {market.title}
                  </motion.h4>
                  <div className="mt-2 flex items-center space-x-2 text-xs font-sans" style={{ color: '#666666' }}>
                    <span>by {market.creator}</span>
                    {market.verified && (
                      <motion.span 
                        className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                      >
                        ✓ Verified
                      </motion.span>
                    )}
                  </div>
                </div>
              </div>

              {/* Market Stats */}
              <div className="relative p-6 space-y-6 bg-gradient-to-b from-slate-900/30 via-black/20 to-slate-900/30 backdrop-blur-xl">
                {/* Enhanced glassmorphism content overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-black/15 rounded-b-2xl"></div>
                <div className="absolute inset-0 rounded-b-2xl border border-white/10"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex space-x-6 text-sm">
                    <motion.div 
                      className="flex items-center space-x-2 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/10"
                      style={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <IconUsers className="w-4 h-4 text-green-400" />
                      <span className="text-white font-bold font-sans">{market.participants}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/10"
                      style={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <IconActivity className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-bold font-sans">{market.volume}</span>
                    </motion.div>
                  </div>
                  <motion.div 
                    className={`flex items-center space-x-2 text-sm px-4 py-2 rounded-xl backdrop-blur-sm border ${
                      market.change.startsWith('+') ? 'border-green-500/30' : 'border-red-500/30'
                    }`}
                    style={{
                      background: market.change.startsWith('+') 
                        ? 'rgba(16, 185, 129, 0.15)' 
                        : 'rgba(239, 68, 68, 0.15)',
                      boxShadow: market.change.startsWith('+') 
                        ? '0 4px 12px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                        : '0 4px 12px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    {market.change.startsWith('+') ? (
                      <IconArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <IconArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                    <span className="font-bold font-sans text-white">{market.change}</span>
                  </motion.div>
                </div>
                
                <div className="flex space-x-3">
                  <motion.button 
                    className="flex-1 py-4 px-6 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden backdrop-blur-xl border border-green-500/30"
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      boxShadow: '0 6px 20px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      background: 'rgba(16, 185, 129, 0.25)',
                      boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                      y: -1
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <IconCheck className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 font-sans">YES {market.yesPrice}</span>
                  </motion.button>
                  <motion.button 
                    className="flex-1 py-4 px-6 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden backdrop-blur-xl border border-red-500/30"
                    style={{
                      background: 'rgba(239, 68, 68, 0.15)',
                      color: '#ef4444',
                      boxShadow: '0 6px 20px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      background: 'rgba(239, 68, 68, 0.25)',
                      boxShadow: '0 6px 20px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                      y: -1
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <IconX className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 font-sans">NO {market.noPrice}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.button 
            className="px-6 py-3 rounded-xl text-sm font-bold"
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              color: 'white'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 8px 24px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Markets
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Markets

