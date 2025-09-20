import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Settings, 
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Users,
  Activity,
  DollarSign,
  Target,
  Zap
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const Trading = () => {
  const [selectedTab, setSelectedTab] = useState('buy')
  const [orderType, setOrderType] = useState('limit')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  const chartData = [
    { time: '09:00', price: 0.65, volume: 1200 },
    { time: '09:30', price: 0.68, volume: 1500 },
    { time: '10:00', price: 0.72, volume: 1800 },
    { time: '10:30', price: 0.70, volume: 1600 },
    { time: '11:00', price: 0.75, volume: 2000 },
    { time: '11:30', price: 0.73, volume: 1700 },
    { time: '12:00', price: 0.78, volume: 2200 },
    { time: '12:30', price: 0.76, volume: 1900 },
    { time: '13:00', price: 0.80, volume: 2500 },
  ]

  const orderBookData = {
    asks: [
      { price: 0.82, amount: 1500, total: 1500 },
      { price: 0.81, amount: 2300, total: 3800 },
      { price: 0.80, amount: 1800, total: 5600 },
      { price: 0.79, amount: 2100, total: 7700 },
      { price: 0.78, amount: 1900, total: 9600 },
    ],
    bids: [
      { price: 0.77, amount: 2200, total: 2200 },
      { price: 0.76, amount: 1800, total: 4000 },
      { price: 0.75, amount: 2500, total: 6500 },
      { price: 0.74, amount: 1600, total: 8100 },
      { price: 0.73, amount: 2000, total: 10100 },
    ]
  }

  const recentTrades = [
    { price: 0.78, amount: 500, time: '13:45:23', side: 'buy' },
    { price: 0.77, amount: 1200, time: '13:44:56', side: 'sell' },
    { price: 0.79, amount: 800, time: '13:44:12', side: 'buy' },
    { price: 0.76, amount: 300, time: '13:43:45', side: 'sell' },
    { price: 0.80, amount: 1500, time: '13:43:01', side: 'buy' },
  ]

  const marketInfo = {
    title: 'Will ETH hit $5000 by year-end?',
    category: 'Crypto',
    currentPrice: 0.78,
    change: '+12.5%',
    volume: '$2.4M',
    participants: 1247,
    timeLeft: '45 days',
    high24h: 0.82,
    low24h: 0.65,
    avg24h: 0.73
  }

  return (
    <div className="h-screen text-white overflow-hidden relative" style={{
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
      
      {/* Ultra-Premium Header */}
      <div className="h-24 border-b border-white/10 relative z-10" style={{
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
        <div className="flex items-center justify-between h-full px-8 relative z-10">
          <div className="flex items-center space-x-12">
            <div>
              <motion.h1 
                className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent font-sans"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                ETH $5000 Prediction
              </motion.h1>
              <motion.p 
                className="text-sm text-gray-400 font-sans mt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Will Ethereum hit $5000 by year-end?
              </motion.p>
            </div>
            <div className="flex items-center space-x-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-green-400 font-sans">0.78</div>
                <div className="text-sm text-green-400 font-sans flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.5%
                </div>
              </motion.div>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-sm text-gray-400 font-sans">24h Volume</div>
                <div className="text-xl font-bold text-white font-sans">$2.4M</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-sm text-gray-400 font-sans">Participants</div>
                <div className="text-xl font-bold text-white font-sans">1,247</div>
              </motion.div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button 
              className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all duration-300 group backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <RefreshCw className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            </motion.button>
            <motion.button 
              className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all duration-300 group backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Settings className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Trading Interface */}
      <div className="flex h-[calc(100vh-6rem)] relative z-10 overflow-hidden">
        {/* Left Panel - Premium Chart */}
        <div className="flex-1 flex flex-col">
          {/* Ultra-Premium Chart Controls */}
          <div className="h-20 border-b border-white/10 flex items-center px-8" style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            <div className="flex space-x-3">
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 font-sans"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                1H
              </motion.button>
              <motion.button 
                className="px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 text-sm font-bold rounded-xl transition-all duration-300 font-sans"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                4H
              </motion.button>
              <motion.button 
                className="px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 text-sm font-bold rounded-xl transition-all duration-300 font-sans"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                1D
              </motion.button>
              <motion.button 
                className="px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 text-sm font-bold rounded-xl transition-all duration-300 font-sans"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                1W
              </motion.button>
            </div>
            <div className="flex space-x-3 ml-12">
              <motion.button 
                className="px-6 py-3 bg-white/10 text-white text-sm font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 font-sans backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Line
              </motion.button>
              <motion.button 
                className="px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 text-sm font-bold rounded-xl transition-all duration-300 font-sans"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Candles
              </motion.button>
              <motion.button 
                className="px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 text-sm font-bold rounded-xl transition-all duration-300 font-sans"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Depth
              </motion.button>
            </div>
            <div className="ml-auto flex items-center space-x-8">
              <motion.div 
                className="text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-xs text-gray-400 font-sans">24h High</div>
                <div className="text-lg font-bold text-white font-sans">0.82</div>
              </motion.div>
              <motion.div 
                className="text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="text-xs text-gray-400 font-sans">24h Low</div>
                <div className="text-lg font-bold text-white font-sans">0.65</div>
              </motion.div>
            </div>
          </div>

          {/* Ultra-Premium Chart Area */}
          <div className="flex-1 relative" style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-blue-500/3"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/2 via-transparent to-transparent"></div>
            
            {/* Chart Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
            
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 40, right: 50, left: 40, bottom: 40 }}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.6}/>
                    <stop offset="30%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="70%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#10b981" floodOpacity="0.3"/>
                  </filter>
                </defs>
                <CartesianGrid strokeDasharray="1 1" stroke="rgba(255, 255, 255, 0.03)" strokeWidth={0.5} />
                <XAxis 
                  dataKey="time" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: 'rgba(255, 255, 255, 0.6)' }}
                />
                <YAxis 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: 'rgba(255, 255, 255, 0.6)' }}
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <motion.div 
                          className="bg-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-2xl"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-white mb-3 font-sans text-base font-semibold">{label}</div>
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                            <span className="text-white text-base font-sans font-medium">Price: ${payload[0].value}</span>
                          </div>
                        </motion.div>
                      )
                    }
                    return null
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#10b981" 
                  fill="url(#chartGradient)" 
                  strokeWidth={4}
                  filter="url(#glow)"
                  dot={{ fill: '#10b981', strokeWidth: 3, r: 5, filter: 'url(#shadow)' }}
                  activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 3, fill: '#fff', filter: 'url(#shadow)' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Panel - Ultra-Premium Trading Interface */}
        <div className="w-96 border-l border-white/10 flex flex-col" style={{
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}>
          {/* Recent Trades with Fade Effect */}
          <div className="h-64 border-b border-white/5 p-4 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-white font-sans">Recent Trades</h3>
              <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                <span className="text-xs text-gray-300 font-sans font-medium">Live</span>
              </div>
            </div>
            
            {/* Trades Container with Fade */}
            <div className="relative h-48 overflow-hidden">
              {/* Fade Top */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none"></div>
              
              {/* Fade Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
              
              {/* Trades List - Fixed Height, No Scroll */}
              <div className="space-y-2 h-full">
                {[
                  { type: 'buy', price: '0.78', amount: '1,250', time: '14:32:15' },
                  { type: 'sell', price: '0.77', amount: '890', time: '14:31:42' },
                  { type: 'buy', price: '0.79', amount: '2,100', time: '14:31:18' },
                  { type: 'sell', price: '0.76', amount: '650', time: '14:30:55' },
                  { type: 'buy', price: '0.80', amount: '1,800', time: '14:30:33' },
                  { type: 'sell', price: '0.75', amount: '1,400', time: '14:29:47' },
                  { type: 'buy', price: '0.81', amount: '950', time: '14:29:12' },
                  { type: 'sell', price: '0.74', amount: '1,100', time: '14:28:38' },
                  { type: 'buy', price: '0.82', amount: '1,600', time: '14:28:05' },
                  { type: 'sell', price: '0.73', amount: '750', time: '14:27:29' }
                ].map((trade, index) => (
                  <motion.div 
                    key={index} 
                    className="flex justify-between items-center text-xs hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer"
                    whileHover={{ scale: 1.01, x: 2 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${trade.type === 'buy' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <span className={`font-sans font-semibold ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.price}
                      </span>
                    </div>
                    <span className="text-white font-sans font-medium">{trade.amount}</span>
                    <span className="text-gray-400 font-sans">{trade.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Ultra-Premium Trading Panel */}
          <div className="flex-1 p-4">
            <div className="space-y-4">
              {/* Buy/Sell Buttons */}
              <div className="flex space-x-2">
                <motion.button 
                  onClick={() => setSelectedTab('buy')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold font-sans transition-all duration-300 ${
                    selectedTab === 'buy' 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy YES
                </motion.button>
                <motion.button 
                  onClick={() => setSelectedTab('sell')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold font-sans transition-all duration-300 ${
                    selectedTab === 'sell' 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy NO
                </motion.button>
              </div>

              {/* Order Type */}
              <div>
                <label className="block text-xs text-gray-300 mb-2 font-sans font-semibold">Order Type</label>
                <select 
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <option value="limit">Limit Order</option>
                  <option value="market">Market Order</option>
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-xs text-gray-300 mb-2 font-sans font-semibold">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Price (for limit orders) */}
              {orderType === 'limit' && (
                <div>
                  <label className="block text-xs text-gray-300 mb-2 font-sans font-semibold">Price</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              )}

              {/* Premium Summary */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-sans text-xs font-medium">Total</span>
                  <span className="text-white font-sans text-sm font-bold">$0.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-sans text-xs font-medium">Fee</span>
                  <span className="text-white font-sans text-sm font-bold">$0.00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="text-gray-300 font-sans text-sm font-semibold">Total Cost</span>
                  <span className="text-white font-sans text-base font-bold">$0.00</span>
                </div>
              </div>

              {/* Premium Submit Button */}
              <motion.button 
                className={`w-full py-4 rounded-xl font-bold text-sm font-sans transition-all duration-300 ${
                  selectedTab === 'buy' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40' 
                    : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {selectedTab === 'buy' ? 'Buy YES' : 'Buy NO'} {orderType === 'market' ? 'at Market' : `at ${price || marketInfo.currentPrice}`}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trading