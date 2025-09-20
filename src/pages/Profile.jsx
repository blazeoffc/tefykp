import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Settings, 
  Edit, 
  Trophy, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Target,
  BarChart3,
  Calendar,
  Star,
  Award,
  Activity,
  Eye,
  MessageCircle,
  Share2,
  Copy,
  ExternalLink,
  Bell,
  Shield,
  Zap,
  RefreshCw,
  Plus,
  Check,
  X
} from 'lucide-react'
import { IconUser, IconCrown, IconTrophy, IconStar, IconShield } from '@tabler/icons-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)

  const userStats = {
    username: 'CryptoWhale',
    avatar: <IconUser className="w-8 h-8 text-white" />,
    verified: true,
    joinDate: '2023-01-15',
    followers: 15420,
    following: 892,
    totalPnl: 45678,
    pnlPercent: 234.5,
    winRate: 87.3,
    totalTrades: 1247,
    marketsCreated: 23,
    totalVolume: 12300000,
    rank: 1,
    badge: 'crown'
  }

  const performanceData = [
    { month: 'Jan', pnl: 4000, trades: 120 },
    { month: 'Feb', pnl: 3000, trades: 95 },
    { month: 'Mar', pnl: 5000, trades: 140 },
    { month: 'Apr', pnl: 4500, trades: 130 },
    { month: 'May', pnl: 6000, trades: 160 },
    { month: 'Jun', pnl: 5500, trades: 150 },
    { month: 'Jul', pnl: 7000, trades: 180 },
  ]

  const categoryData = [
    { name: 'Crypto', value: 45, color: '#10b981', percentage: 45 },
    { name: 'Politics', value: 25, color: '#3b82f6', percentage: 25 },
    { name: 'Sports', value: 20, color: '#10b981', percentage: 20 },
    { name: 'Business', value: 10, color: '#8b5cf6', percentage: 10 },
  ]

  const recentTrades = [
    { market: 'ETH $5000', side: 'YES', amount: 500, price: 0.65, pnl: 150, time: '2h ago', status: 'won' },
    { market: 'Tesla $300', side: 'NO', amount: 300, price: 0.55, pnl: -45, time: '5h ago', status: 'lost' },
    { market: 'Messi Goal', side: 'YES', amount: 750, price: 0.72, pnl: 225, time: '1d ago', status: 'won' },
    { market: 'Bitcoin $100K', side: 'YES', amount: 200, price: 0.35, pnl: 60, time: '2d ago', status: 'won' },
    { market: 'Election 2024', side: 'NO', amount: 400, price: 0.45, pnl: -80, time: '3d ago', status: 'lost' },
  ]

  const createdMarkets = [
    {
      title: 'Will ETH hit $5000 by year-end?',
      category: 'Crypto',
      volume: 2400000,
      participants: 1247,
      accuracy: 92.3,
      timeLeft: '45 days',
      status: 'active'
    },
    {
      title: 'Will Tesla stock hit $300 in Q2?',
      category: 'Business',
      volume: 1800000,
      participants: 892,
      accuracy: 85.4,
      timeLeft: '23 days',
      status: 'active'
    },
    {
      title: 'Will Messi score in next World Cup?',
      category: 'Sports',
      volume: 3100000,
      participants: 2156,
      accuracy: 88.7,
      timeLeft: '67 days',
      status: 'active'
    }
  ]

  const achievements = [
    { id: 1, name: 'First Million', description: 'Earned $1M in trading profits', icon: DollarSign, unlocked: true, date: '2023-06-15' },
    { id: 2, name: 'Perfect Streak', description: 'Won 20 trades in a row', icon: Zap, unlocked: true, date: '2023-08-22' },
    { id: 3, name: 'Market Maker', description: 'Created 10 successful markets', icon: BarChart3, unlocked: true, date: '2023-09-10' },
    { id: 4, name: 'Top Trader', description: 'Ranked #1 for 3 months', icon: Trophy, unlocked: true, date: '2023-11-01' },
    { id: 5, name: 'Social Butterfly', description: 'Gained 10K followers', icon: Star, unlocked: false, date: null },
    { id: 6, name: 'Volume King', description: 'Traded $10M in volume', icon: Activity, unlocked: false, date: null },
  ]

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'crown': return <Trophy className="w-5 h-5 text-yellow-400" />
      case 'medal': return <Award className="w-5 h-5 text-blue-400" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen text-white overflow-hidden relative" style={{
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    }}>
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            'linear-gradient(135deg, transparent 0%, rgba(16, 185, 129, 0.02) 50%, transparent 100%)',
            'linear-gradient(135deg, transparent 0%, rgba(16, 185, 129, 0.01) 50%, transparent 100%)',
            'linear-gradient(135deg, transparent 0%, rgba(16, 185, 129, 0.02) 50%, transparent 100%)'
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Glassmorphism Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
        }}
      />
      
      {/* Border Effects */}
      <div className="absolute inset-0 border border-white/10 rounded-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="relative z-10 p-6 space-y-8">
        {/* Ultra-Sleek Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h1 className="text-white mb-1 font-sans text-3xl font-bold">Profile</h1>
            <p className="font-sans" style={{ color: '#666666' }}>Your trading performance and achievements</p>
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-3">
            <motion.button 
              className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-200 group backdrop-blur-sm flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
              <span className="text-white font-sans">Share Profile</span>
            </motion.button>
            <motion.button 
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-200 group backdrop-blur-sm flex items-center space-x-2 shadow-lg shadow-green-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Edit className="w-4 h-4" />
              <span className="font-sans">{isEditing ? 'Save' : 'Edit Profile'}</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Profile Header - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-4xl shadow-lg shadow-green-500/25">
                  {userStats.avatar}
                </div>
                {userStats.verified && (
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-white text-3xl font-bold font-sans">{userStats.username}</h2>
                  {getBadgeIcon(userStats.badge)}
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium font-sans">
                    Rank #{userStats.rank}
                  </span>
                </div>
                <div className="flex items-center space-x-6 text-sm font-sans" style={{ color: '#666666' }}>
                  <span>Joined {new Date(userStats.joinDate).toLocaleDateString()}</span>
                  <span>{userStats.followers.toLocaleString()} followers</span>
                  <span>{userStats.following.toLocaleString()} following</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 lg:mt-0 text-right">
              <div className="text-white text-4xl font-bold mb-2 font-sans">
                ${userStats.totalPnl.toLocaleString()}
              </div>
              <div className="flex items-center justify-end space-x-2 mb-4">
                <span className={`text-lg font-medium font-sans ${
                  userStats.pnlPercent >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {userStats.pnlPercent >= 0 ? '+' : ''}{userStats.pnlPercent}%
                </span>
                <span className="font-sans" style={{ color: '#666666' }}>Total P&L</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="text-white text-lg font-semibold font-sans">{userStats.winRate}%</div>
                  <div className="font-sans" style={{ color: '#666666' }}>Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-lg font-semibold font-sans">{userStats.totalTrades}</div>
                  <div className="font-sans" style={{ color: '#666666' }}>Trades</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-lg font-semibold font-sans">{userStats.marketsCreated}</div>
                  <div className="font-sans" style={{ color: '#666666' }}>Markets</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl p-1"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex space-x-1">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'trades', label: 'Recent Trades', icon: Activity },
              { id: 'markets', label: 'My Markets', icon: Target },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-200 font-sans ${
                  activeTab === tab.id
                    ? 'bg-green-500/20 text-green-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Performance Chart - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl p-6"
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-xl font-semibold font-sans">Performance Overview</h3>
                  
                  {/* Date Type Filters - Beside heading */}
                  <div className="flex space-x-2">
                    {[
                      { label: '1D', active: false },
                      { label: '1W', active: true },
                      { label: '1M', active: false },
                      { label: '1Y', active: false }
                    ].map((timeframe, index) => (
                      <button 
                        key={timeframe.label}
                        className={`backdrop-blur-xl border rounded-xl px-4 py-2 text-xs font-semibold font-sans transition-all duration-300 ${
                          timeframe.active 
                            ? 'bg-green-500/20 border-green-500/50 text-green-400 shadow-lg shadow-green-500/20' 
                            : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        {timeframe.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="h-96 relative">
                  {/* Ultra-Premium Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                  
                  {/* Animated Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData} margin={{ top: 30, right: 40, left: 30, bottom: 30 }}>
                      <defs>
                        {/* Premium Multi-Layer Gradients */}
                        <linearGradient id="premiumGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
                          <stop offset="30%" stopColor="#059669" stopOpacity={0.8}/>
                          <stop offset="70%" stopColor="#047857" stopOpacity={0.4}/>
                          <stop offset="100%" stopColor="#064e3b" stopOpacity={0.1}/>
                        </linearGradient>
                        
                        {/* Glow Effect Filter */}
                        <filter id="chartGlow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                        
                        {/* Shadow Filter */}
                        <filter id="chartShadow" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#10b981" floodOpacity="0.3"/>
                        </filter>
                      </defs>
                      
                      {/* Ultra-Minimal Grid */}
                      <CartesianGrid 
                        strokeDasharray="1 1" 
                        stroke="rgba(255, 255, 255, 0.03)" 
                        strokeWidth={0.5}
                        vertical={false}
                      />
                      
                      {/* Premium Axes */}
                      <XAxis 
                        dataKey="month" 
                        stroke="rgba(255, 255, 255, 0.4)"
                        fontSize={11}
                        fontWeight="500"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: 'rgba(255, 255, 255, 0.7)' }}
                        tickMargin={10}
                      />
                      <YAxis 
                        stroke="rgba(255, 255, 255, 0.4)"
                        fontSize={11}
                        fontWeight="500"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: 'rgba(255, 255, 255, 0.7)' }}
                        tickMargin={10}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      
                      {/* Ultra-Premium Tooltip */}
                      <Tooltip 
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-black/95 backdrop-blur-2xl border border-green-500/30 rounded-2xl p-6 shadow-2xl min-w-[200px]">
                                <div className="flex items-center space-x-3 mb-4">
                                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                  <div className="text-white text-lg font-bold font-sans">{label}</div>
                                </div>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-gray-300 text-sm font-sans">Portfolio Value</span>
                                    <span className="text-green-400 text-lg font-bold font-sans">
                                      ${payload[0].value?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-gray-300 text-sm font-sans">Change</span>
                                    <span className="text-green-400 text-sm font-semibold font-sans">
                                      +{((payload[0].value / 3000 - 1) * 100).toFixed(1)}%
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-white/10">
                                  <div className="text-xs text-gray-400 font-sans">Performance Overview</div>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                        cursor={{ stroke: 'rgba(16, 185, 129, 0.3)', strokeWidth: 2 }}
                      />
                      
                      {/* Ultra-Premium Area with Advanced Effects */}
                      <Area
                        type="monotone"
                        dataKey="pnl"
                        stroke="url(#premiumGradient)"
                        strokeWidth={4}
                        fill="url(#premiumGradient)"
                        filter="url(#chartGlow)"
                        dot={false}
                        activeDot={{ 
                          r: 8, 
                          stroke: '#ffffff', 
                          strokeWidth: 3, 
                          fill: '#10b981',
                          filter: 'url(#chartShadow)',
                          style: { filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))' }
                        }}
                        style={{ filter: 'drop-shadow(0 4px 20px rgba(16, 185, 129, 0.2))' }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  
                  
                </div>
              </div>
            </motion.div>

            {/* Category Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative overflow-hidden rounded-2xl p-6"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Ultra-Premium Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Border Effects */}
                <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-white text-xl font-semibold mb-6 font-sans">Trading Categories</h3>
                  <div className="h-64 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <defs>
                          {/* Premium Gradients for Pie Slices */}
                          <linearGradient id="cryptoGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
                            <stop offset="100%" stopColor="#059669" stopOpacity={0.8}/>
                          </linearGradient>
                          <linearGradient id="politicsGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                            <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.8}/>
                          </linearGradient>
                          <linearGradient id="sportsGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
                            <stop offset="100%" stopColor="#059669" stopOpacity={0.8}/>
                          </linearGradient>
                          <linearGradient id="businessGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1}/>
                            <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.8}/>
                          </linearGradient>
                          
                          {/* Glow Effect Filter */}
                          <filter id="pieGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={110}
                          paddingAngle={2}
                          dataKey="value"
                          stroke="rgba(0, 0, 0, 0.2)"
                          strokeWidth={2}
                        >
                          {categoryData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={`url(#${entry.name.toLowerCase()}Gradient)`}
                              filter="url(#pieGlow)"
                              style={{ 
                                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.filter = 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.5)) brightness(1.2)';
                                e.target.style.transform = 'scale(1.05)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.filter = 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))';
                                e.target.style.transform = 'scale(1)';
                              }}
                            />
                          ))}
                        </Pie>
                        
                        {/* Ultra-Premium Tooltip */}
                        <Tooltip 
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-black/95 backdrop-blur-2xl border border-green-500/30 rounded-2xl p-6 shadow-2xl min-w-[200px] transform scale-105 transition-all duration-300">
                                  <div className="flex items-center space-x-3 mb-4">
                                    <div 
                                      className="w-5 h-5 rounded-full shadow-lg" 
                                      style={{ backgroundColor: data.color }}
                                    ></div>
                                    <div className="text-white text-xl font-bold font-sans">{data.name}</div>
                                  </div>
                                  <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-300 text-sm font-sans">Portfolio Value</span>
                                      <span className="text-white text-lg font-bold font-sans">
                                        ${data.value.toLocaleString()}K
                                      </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-300 text-sm font-sans">Percentage</span>
                                      <span className="text-green-400 text-lg font-bold font-sans">
                                        {data.percentage}%
                                      </span>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10">
                                      <div className="text-xs text-gray-400 font-sans">Trading Category</div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                          cursor={{ stroke: 'rgba(16, 185, 129, 0.3)', strokeWidth: 2 }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    
                    {/* Center Label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white text-2xl font-bold font-sans">$45.2K</div>
                        <div className="text-gray-400 text-sm font-sans">Total Value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative overflow-hidden rounded-2xl p-6"
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
                  <h3 className="text-white text-lg font-semibold mb-4 font-sans">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-sans" style={{ color: '#666666' }}>Best Trade</span>
                      <span className="text-green-400 font-medium font-sans">+$2,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-sans" style={{ color: '#666666' }}>Worst Trade</span>
                      <span className="text-red-400 font-medium font-sans">-$890</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-sans" style={{ color: '#666666' }}>Avg Trade Size</span>
                      <span className="text-white font-medium font-sans">$1,250</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-sans" style={{ color: '#666666' }}>Current Streak</span>
                      <span className="text-green-400 font-medium font-sans">8 wins</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-sans" style={{ color: '#666666' }}>Longest Streak</span>
                      <span className="text-white font-medium font-sans">15 wins</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-sans" style={{ color: '#666666' }}>Total Volume</span>
                      <span className="text-white font-medium font-sans">${(userStats.totalVolume / 1000000).toFixed(1)}M</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        </div>
      )}

        {/* Recent Trades Tab */}
        {activeTab === 'trades' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl p-6"
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
              <h3 className="text-white text-xl font-semibold mb-6 font-sans">Recent Trades</h3>
              <div className="space-y-4">
                {recentTrades.map((trade, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative backdrop-blur-sm rounded-xl p-4 transition-all duration-200 hover:bg-white/5"
                    style={{
                      background: 'rgba(0, 0, 0, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          trade.status === 'won' ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}>
                          {trade.status === 'won' ? (
                            <TrendingUp className="w-5 h-5 text-green-400" />
                          ) : (
                            <TrendingDown className="w-5 h-5 text-red-400" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-white font-sans">{trade.market}</div>
                          <div className="text-sm font-sans" style={{ color: '#666666' }}>{trade.side} • {trade.amount} shares at {trade.price}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold font-sans ${
                          trade.pnl >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {trade.pnl >= 0 ? '+' : ''}${trade.pnl}
                        </div>
                        <div className="text-sm font-sans" style={{ color: '#666666' }}>{trade.time}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* My Markets Tab */}
        {activeTab === 'markets' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {createdMarkets.map((market, index) => (
              <motion.div
                key={market.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative overflow-hidden rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02]"
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
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold font-sans">{market.title}</h3>
                      <div className="flex items-center space-x-4 text-sm font-sans" style={{ color: '#666666' }}>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-lg">
                          {market.category}
                        </span>
                        <span>{market.participants} participants</span>
                        <span>{market.timeLeft} left</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-2xl font-bold font-sans">
                      ${(market.volume / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm font-sans" style={{ color: '#666666' }}>Volume</div>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" style={{ color: '#666666' }} />
                        <span className="text-white font-sans">{market.accuracy}% accuracy</span>
                      </div>
                      <span className={`px-2 py-1 rounded-lg text-xs font-sans ${
                        market.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {market.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-200 ${
                  achievement.unlocked ? 'hover:scale-[1.02]' : 'opacity-60'
                }`}
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
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      achievement.unlocked 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-gray-700 text-gray-500'
                    }`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold font-sans ${
                        achievement.unlocked ? 'text-white' : 'text-gray-500'
                      }`}>
                        {achievement.name}
                      </h3>
                      {achievement.unlocked && achievement.date && (
                        <p className="text-xs font-sans" style={{ color: '#666666' }}>
                          Unlocked {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className={`text-sm font-sans ${
                    achievement.unlocked ? 'text-white' : 'text-gray-500'
                  }`}>
                    {achievement.description}
                  </p>
                  {achievement.unlocked && (
                    <div className="mt-4 flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-yellow-400 font-medium font-sans">Achievement Unlocked</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative overflow-hidden rounded-2xl p-6"
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
                <h3 className="text-white text-xl font-semibold mb-6 font-sans">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans" style={{ color: '#666666' }}>Username</label>
                    <input
                      type="text"
                      value={userStats.username}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans" style={{ color: '#666666' }}>Bio</label>
                    <textarea
                      placeholder="Tell us about yourself..."
                      rows={3}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm resize-none"
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans" style={{ color: '#666666' }}>Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-6"
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
                <h3 className="text-white text-xl font-semibold mb-6 font-sans">Notification Settings</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Trade Notifications', description: 'Get notified when your trades execute' },
                    { label: 'Market Updates', description: 'Updates on markets you follow' },
                    { label: 'Achievement Unlocks', description: 'When you unlock new achievements' },
                    { label: 'Weekly Summary', description: 'Weekly performance summary' }
                  ].map((setting, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-white font-sans">{setting.label}</div>
                        <div className="text-sm font-sans" style={{ color: '#666666' }}>{setting.description}</div>
                      </div>
                      <button className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-6"
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
                <h3 className="text-white text-xl font-semibold mb-6 font-sans">Privacy & Security</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white font-sans">Public Profile</div>
                      <div className="text-sm font-sans" style={{ color: '#666666' }}>Make your profile visible to other users</div>
                    </div>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white font-sans">Show Trading Activity</div>
                      <div className="text-sm font-sans" style={{ color: '#666666' }}>Display your trades on your profile</div>
                    </div>
                    <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Profile



