import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Users, 
  Target,
  Zap,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  Copy,
  ExternalLink
} from 'lucide-react'
import { 
  IconCurrencyBitcoin,
  IconBuildingBank,
  IconBallFootball,
  IconBriefcase,
  IconMovie,
  IconDeviceDesktop,
  IconMicroscope,
  IconCloudRain,
  IconArrowRight,
  IconArrowLeft
} from '@tabler/icons-react'

const CreateMarket = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    endDate: '',
    endTime: '',
    resolutionCriteria: '',
    image: '',
    tags: [],
    feeStructure: 'standard'
  })

  const categories = [
    { id: 'crypto', name: 'Cryptocurrency', icon: IconCurrencyBitcoin, color: 'from-yellow-500/20 to-orange-500/20 text-yellow-400' },
    { id: 'politics', name: 'Politics', icon: IconBuildingBank, color: 'from-blue-500/20 to-indigo-500/20 text-blue-400' },
    { id: 'sports', name: 'Sports', icon: IconBallFootball, color: 'from-green-500/20 to-emerald-500/20 text-green-400' },
    { id: 'business', name: 'Business', icon: IconBriefcase, color: 'from-purple-500/20 to-violet-500/20 text-purple-400' },
    { id: 'entertainment', name: 'Entertainment', icon: IconMovie, color: 'from-pink-500/20 to-rose-500/20 text-pink-400' },
    { id: 'tech', name: 'Technology', icon: IconDeviceDesktop, color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400' },
    { id: 'science', name: 'Science', icon: IconMicroscope, color: 'from-teal-500/20 to-cyan-500/20 text-teal-400' },
    { id: 'weather', name: 'Weather', icon: IconCloudRain, color: 'from-sky-500/20 to-blue-500/20 text-sky-400' }
  ]

  const templates = [
    {
      id: 'crypto-price',
      title: 'Cryptocurrency Price Prediction',
      description: 'Will [COIN] reach $[PRICE] by [DATE]?',
      category: 'crypto',
      example: 'Will Bitcoin reach $100,000 by December 31, 2024?'
    },
    {
      id: 'election',
      title: 'Election Outcome',
      description: 'Will [CANDIDATE] win the [ELECTION]?',
      category: 'politics',
      example: 'Will Donald Trump win the 2024 US Presidential Election?'
    },
    {
      id: 'sports-match',
      title: 'Sports Match Result',
      description: 'Will [TEAM] win against [TEAM] on [DATE]?',
      category: 'sports',
      example: 'Will Manchester United beat Liverpool on March 15, 2024?'
    },
    {
      id: 'stock-price',
      title: 'Stock Price Target',
      description: 'Will [STOCK] hit $[PRICE] by [DATE]?',
      category: 'business',
      example: 'Will Tesla stock hit $300 by Q2 2024?'
    },
    {
      id: 'product-launch',
      title: 'Product Launch',
      description: 'Will [COMPANY] launch [PRODUCT] by [DATE]?',
      category: 'tech',
      example: 'Will Apple launch the iPhone 16 by September 2024?'
    }
  ]

  const feeStructures = [
    {
      id: 'standard',
      name: 'Standard',
      creatorFee: '40%',
      referrerFee: '20%',
      protocolFee: '30%',
      stakerFee: '10%',
      description: 'Balanced fee distribution for most markets'
    },
    {
      id: 'premium',
      name: 'Premium',
      creatorFee: '50%',
      referrerFee: '15%',
      protocolFee: '25%',
      stakerFee: '10%',
      description: 'Higher creator rewards for verified accounts'
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleTagAdd = (tag) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }))
    }
  }

  const handleTagRemove = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.title && formData.category
      case 2:
        return formData.endDate && formData.endTime
      case 3:
        return formData.resolutionCriteria
      case 4:
        return true
      default:
        return false
    }
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
            <h1 className="text-white text-3xl font-bold mb-2 font-sans">Create Prediction Market</h1>
            <p className="font-sans" style={{ color: '#666666' }}>Launch your own prediction market and earn continuous fees</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <button className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-6 py-3 flex items-center space-x-2 text-white font-sans hover:bg-white/10 transition-all duration-300">
              <ExternalLink className="w-4 h-4" />
              <span>View Examples</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
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
        
        <div className="relative z-10 flex items-center justify-between">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold font-sans transition-all duration-300 ${
                step >= stepNumber
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white/5 border border-white/10 text-gray-400'
              }`}>
                {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
              </div>
              <div className="ml-4 hidden sm:block">
                <div className={`text-sm font-medium font-sans ${
                  step >= stepNumber ? 'text-white' : 'text-gray-400'
                }`}>
                  {stepNumber === 1 && 'Basic Info'}
                  {stepNumber === 2 && 'Timeline'}
                  {stepNumber === 3 && 'Resolution'}
                  {stepNumber === 4 && 'Review'}
                </div>
              </div>
              {stepNumber < 4 && (
                <div className={`w-16 h-0.5 mx-4 rounded-full ${
                  step > stepNumber ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-white/10'
                }`} />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
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
                  <h3 className="text-white text-xl font-semibold mb-6 font-sans">Basic Information</h3>
                
                {/* Templates */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3 font-sans" style={{ color: '#666666' }}>Choose a Template (Optional)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            title: template.example,
                            category: template.category
                          }))
                        }}
                        className="p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-left transition-all duration-200 hover:bg-white/10 hover:border-white/20"
                      >
                        <div className="text-sm font-medium text-white mb-1 font-sans">{template.title}</div>
                        <div className="text-xs font-sans" style={{ color: '#666666' }}>{template.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Market Title */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 font-sans" style={{ color: '#666666' }}>
                    Market Question *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Will ETH hit $5000 by year-end?"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                  <p className="text-xs font-sans mt-1" style={{ color: '#666666' }}>
                    Make it clear, specific, and time-bound for better trading
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 font-sans" style={{ color: '#666666' }}>
                    Description
                  </label>
                  <textarea
                    placeholder="Provide additional context, background information, or clarification..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm resize-none"
                  />
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3 font-sans" style={{ color: '#666666' }}>
                    Category *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.map((category) => {
                      const IconComponent = category.icon
                      return (
                        <button
                          key={category.id}
                          onClick={() => handleInputChange('category', category.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 backdrop-blur-sm ${
                            formData.category === category.id
                              ? 'border-green-500/50 bg-green-500/20 shadow-lg shadow-green-500/20'
                              : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="mb-2 flex justify-center">
                            {/* Tabler Icons */}
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-sm font-medium text-white font-sans">{category.name}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 font-sans" style={{ color: '#666666' }}>
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm flex items-center space-x-2 font-sans"
                      >
                        <span>{tag}</span>
                        <button
                          onClick={() => handleTagRemove(tag)}
                          className="hover:text-green-300"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Add tags (press Enter to add)"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleTagAdd(e.target.value.trim())
                        e.target.value = ''
                      }
                    }}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Timeline */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-6">Market Timeline</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      End Date *
                    </label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      End Time *
                    </label>
                    <input
                      type="time"
                      value={formData.endTime}
                      onChange={(e) => handleInputChange('endTime', e.target.value)}
                      className="w-full input-field"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 glass rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Info className="w-4 h-4 text-primary-400" />
                    <span className="text-sm font-medium text-slate-200">Timeline Guidelines</span>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Markets must end at least 24 hours from now</li>
                    <li>• Maximum duration is 1 year</li>
                    <li>• Consider timezone differences for global events</li>
                    <li>• Longer markets may have lower initial liquidity</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Resolution Criteria */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-6">Resolution Criteria</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    How will this market be resolved? *
                  </label>
                  <textarea
                    placeholder="Describe the specific criteria for determining YES vs NO outcome. Be as clear and objective as possible..."
                    value={formData.resolutionCriteria}
                    onChange={(e) => handleInputChange('resolutionCriteria', e.target.value)}
                    rows={6}
                    className="w-full input-field resize-none"
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    This helps traders understand exactly what they're betting on
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Data Source (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., CoinGecko, official government data, sports results..."
                    className="w-full input-field"
                  />
                </div>

                <div className="p-4 glass rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-slate-200">Resolution Guidelines</span>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Use objective, verifiable data sources</li>
                    <li>• Avoid subjective interpretations</li>
                    <li>• Consider edge cases and tie-breakers</li>
                    <li>• Markets resolve automatically when possible</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Review & Launch */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-6">Review & Launch</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-slate-200 mb-2">Market Question</h4>
                    <p className="text-slate-300">{formData.title}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-slate-200 mb-2">Category</h4>
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-lg text-sm">
                      {categories.find(c => c.id === formData.category)?.name}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-slate-200 mb-2">End Date & Time</h4>
                    <p className="text-slate-300">{formData.endDate} at {formData.endTime}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-slate-200 mb-2">Resolution Criteria</h4>
                    <p className="text-slate-300">{formData.resolutionCriteria}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-slate-200 mb-2">Fee Structure</h4>
                    <div className="p-4 glass rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Creator Fee:</span>
                          <span className="text-slate-200">40%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Referrer Fee:</span>
                          <span className="text-slate-200">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Protocol Fee:</span>
                          <span className="text-slate-200">30%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Staker Fee:</span>
                          <span className="text-slate-200">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="flex items-center space-x-2 px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white font-sans hover:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/5"
            >
              <IconArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={nextStep}
              disabled={!isStepValid() || step === 4}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-sans rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-green-500 disabled:hover:to-green-600"
            >
              <span>{step === 4 ? 'Launch Market' : 'Next'}</span>
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Market Creator Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
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
              <h3 className="text-white text-lg font-semibold mb-4 font-sans">Creator Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white font-sans">Earn 40% of all trading fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white font-sans">Build reputation as market maker</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white font-sans">Viral sharing incentives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white font-sans">Instant market creation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Creation Cost */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
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
              <h3 className="text-white text-lg font-semibold mb-4 font-sans">Creation Cost</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-sans" style={{ color: '#666666' }}>Market Creation:</span>
                  <span className="text-white font-sans">0.01 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans" style={{ color: '#666666' }}>$PROB Tokens:</span>
                  <span className="text-white font-sans">$10 worth</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans" style={{ color: '#666666' }}>Gas Fee:</span>
                  <span className="text-white font-sans">~$5-15</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between font-medium">
                    <span className="text-white font-sans">Total:</span>
                    <span className="text-white font-sans">~$25-35</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
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
              <h3 className="text-white text-lg font-semibold mb-4 font-sans">Pro Tips</h3>
              <div className="space-y-3 text-sm font-sans" style={{ color: '#666666' }}>
                <p>• Choose trending topics for higher volume</p>
                <p>• Be specific with resolution criteria</p>
                <p>• Consider timezone differences</p>
                <p>• Use clear, objective language</p>
                <p>• Promote your market on social media</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CreateMarket



