import React from 'react'
import { Linkedin, Github, Twitter } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in React and Node.js',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Maria Garcia',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and modern interfaces',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist with expertise in cloud platforms and automation',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sophie Chen',
      role: 'Project Manager',
      bio: 'Experienced PM ensuring smooth project delivery and client satisfaction',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make our projects successful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img 
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-3">
                <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
