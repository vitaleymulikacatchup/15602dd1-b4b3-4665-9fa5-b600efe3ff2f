import React from 'react'
import { ExternalLink } from 'lucide-react'

const CaseStudies = () => {
  const caseStudy = {
    title: 'Dias',
    description: 'A comprehensive healthcare platform that connects patients with medical professionals through an intuitive interface.',
    metrics: [
      { label: 'Users', value: '50,000+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Load Time', value: '<2s' },
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS']
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                {caseStudy.title}
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                {caseStudy.description}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                {caseStudy.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold mb-1">{metric.value}</div>
                    <div className="text-blue-200 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudy.tags.map((tag, index) => (
                  <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <img 
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
