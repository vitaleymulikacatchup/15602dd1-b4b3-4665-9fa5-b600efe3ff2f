import React from 'react'
import { Play } from 'lucide-react'

const Hero = () => {
  const technologies = [
    { name: 'nestjs', color: 'text-red-500' },
    { name: 'mysql', color: 'text-blue-500' },
    { name: 'mongodb', color: 'text-green-500' },
    { name: 'nginx', color: 'text-green-600' },
    { name: 'redis', color: 'text-red-600' },
    { name: 'typescript', color: 'text-blue-600' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary-600">AI-powered</span>
                <br />
                <span className="text-gray-900">web and</span>
                <br />
                <span className="text-primary-600">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                  <span className="font-semibold text-gray-900">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Contact Options */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">T</span>
                </div>
                <span className="text-sm text-gray-600">Telegram</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">W</span>
                </div>
                <span className="text-sm text-gray-600">WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop&crop=center" 
                alt="3D Abstract Shape" 
                className="w-full h-full object-contain animate-float filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-6">We use cutting-edge technologies</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className={`text-lg font-semibold ${tech.color}`}>#</span>
                <span className="text-gray-700 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
