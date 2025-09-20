import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

// Components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Markets from './pages/Markets'
import Trading from './pages/Trading'
import CreateMarket from './pages/CreateMarket'
import Profile from './pages/Profile'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  // Close sidebar on mobile when clicking outside
  const handleSidebarClose = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false)
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Main Layout */}
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar */}
            <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            
            {/* Page Content */}
            <main className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Markets />} />
                  <Route path="/markets" element={<Markets />} />
                  <Route path="/trading" element={<Trading />} />
                  <Route path="/create" element={<CreateMarket />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </div>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(15, 23, 42, 0.9)',
              color: '#f1f5f9',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              backdropFilter: 'blur(10px)',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
